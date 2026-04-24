import { knowledgeBase } from '../lib/knowledge-base'
import { writeFileSync } from 'fs'
import { join } from 'path'

const VOYAGE_API_KEY = process.env.VOYAGE_API_KEY
if (!VOYAGE_API_KEY) throw new Error('VOYAGE_API_KEY is not set in environment')

async function embedTexts(texts: string[]): Promise<number[][]> {
  const res = await fetch('https://api.voyageai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${VOYAGE_API_KEY}`,
    },
    body: JSON.stringify({ input: texts, model: 'voyage-3' }),
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Voyage API error ${res.status}: ${err}`)
  }

  const json = await res.json() as { data: { index: number; embedding: number[] }[] }
  return json.data.sort((a, b) => a.index - b.index).map(d => d.embedding)
}

async function main() {
  console.log(`Embedding ${knowledgeBase.length} knowledge chunks...`)

  const texts = knowledgeBase.map(chunk => `${chunk.title}\n\n${chunk.content}`)
  const embeddings = await embedTexts(texts)

  const output = knowledgeBase.map((chunk, i) => ({
    id: chunk.id,
    factors: chunk.factors,
    title: chunk.title,
    content: chunk.content,
    embedding: embeddings[i],
  }))

  const outPath = join(process.cwd(), 'lib', 'embeddings.json')
  writeFileSync(outPath, JSON.stringify(output, null, 2))
  console.log(`Saved ${output.length} embeddings to lib/embeddings.json`)
  console.log(`Embedding dimensions: ${embeddings[0].length}`)
}

main().catch(console.error)
