import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { readFileSync } from 'fs'
import { join } from 'path'
import type { WeakFactor } from '@/lib/types'

interface EmbeddedChunk {
  id: string
  factors: string[]
  title: string
  content: string
  embedding: number[]
}

// Loaded once and cached for the lifetime of the serverless function instance
const chunks: EmbeddedChunk[] = JSON.parse(
  readFileSync(join(process.cwd(), 'lib', 'embeddings.json'), 'utf-8')
)

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0, magA = 0, magB = 0
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i]
    magA += a[i] * a[i]
    magB += b[i] * b[i]
  }
  return dot / (Math.sqrt(magA) * Math.sqrt(magB))
}

async function embedQuery(text: string): Promise<number[]> {
  const res = await fetch('https://api.voyageai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.VOYAGE_API_KEY}`,
    },
    body: JSON.stringify({ input: [text], model: 'voyage-3' }),
  })
  if (!res.ok) throw new Error(`Voyage API error ${res.status}`)
  const json = await res.json() as { data: { embedding: number[] }[] }
  return json.data[0].embedding
}

function retrieveTopChunks(queryEmbedding: number[], topK = 5): EmbeddedChunk[] {
  return chunks
    .map(chunk => ({ chunk, score: cosineSimilarity(queryEmbedding, chunk.embedding) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map(({ chunk }) => chunk)
}

export async function POST(req: NextRequest) {
  try {
    const { score, weak_factors } = await req.json() as {
      score: number
      weak_factors: WeakFactor[]
    }

    const queryText = weak_factors
      .map(f => `${f.factor.replace(/_/g, ' ')}: currently ${f.current_value}, potential gain ${f.potential_gain} points`)
      .join('. ')

    const queryEmbedding = await embedQuery(queryText)
    const retrieved = retrieveTopChunks(queryEmbedding, 5)

    const context = retrieved
      .map(c => `### ${c.title}\n${c.content}`)
      .join('\n\n')

    const factorsList = weak_factors
      .map(f => `- **${f.factor.replace(/_/g, ' ')}**: currently ${f.current_value} (improving this could add ~${f.potential_gain} points to your score)`)
      .join('\n')

    const prompt = `You are an educational advisor helping a student improve their academic performance based on research evidence.

The student's predicted exam score is ${score}/101.

Their top 3 factors with the highest improvement potential are:
${factorsList}

Use the following research-backed evidence to inform your advice:

${context}

Write exactly 3 short paragraphs of advice — one paragraph per weak factor, in the same order listed above. Each paragraph should be 3–4 sentences: name the factor, give one specific research-backed strategy, and explain why it works. Be direct, encouraging, and address the student as "you". Do not add headers or bullet points.`

    const message = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 600,
      messages: [{ role: 'user', content: prompt }],
    })

    const advice = (message.content[0] as { type: 'text'; text: string }).text

    return NextResponse.json({ advice })
  } catch (err) {
    console.error('/api/advice error:', err)
    return NextResponse.json({ error: 'Failed to generate advice' }, { status: 500 })
  }
}
