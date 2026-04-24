import type { StudentInput, PredictionResponse } from './types'

const API_URL = 'https://web-reg-app-production.up.railway.app'

export async function predictScore(input: StudentInput): Promise<PredictionResponse> {
  const res = await fetch(`${API_URL}/predict`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: `HTTP ${res.status}` }))
    throw new Error(err.detail ?? `HTTP ${res.status}`)
  }

  return res.json()
}
