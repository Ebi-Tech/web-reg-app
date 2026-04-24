'use client'

import { useEffect, useState } from 'react'
import ScoreGauge from '@/components/ui/ScoreGauge'
import { getPerformanceBand, BAND_COLORS, getPerformanceLabel, type WeakFactor } from '@/lib/types'

interface Props {
  score: number
  weakFactors: WeakFactor[]
  onReset: () => void
}

export default function PredictionResult({ score, weakFactors, onReset }: Props) {
  const band = getPerformanceBand(score)
  const bandColor = BAND_COLORS[band]

  const [advice, setAdvice] = useState<string | null>(null)
  const [adviceLoading, setAdviceLoading] = useState(true)
  const [adviceError, setAdviceError] = useState(false)

  useEffect(() => {
    async function fetchAdvice() {
      try {
        const res = await fetch('/api/advice', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ score, weak_factors: weakFactors }),
        })
        if (!res.ok) throw new Error()
        const data = await res.json() as { advice: string }
        setAdvice(data.advice)
      } catch {
        setAdviceError(true)
      } finally {
        setAdviceLoading(false)
      }
    }
    fetchAdvice()
  }, [score, weakFactors])

  const paragraphs = advice?.split(/\n\n+/).filter(Boolean) ?? []

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="text-center">
        <h2 className="text-xl font-bold text-navy">Your Predicted Score</h2>
        <p className="text-sm text-gray-500 mt-1">Based on your profile</p>
      </div>

      <ScoreGauge score={score} />

      <div
        className="w-full rounded-2xl px-5 py-3 text-center font-semibold text-white text-sm"
        style={{ backgroundColor: bandColor }}
      >
        {getPerformanceLabel(band)}
      </div>

      <div className="w-full bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <h3 className="text-sm font-bold text-navy mb-3">Personalised Advice</h3>

        {adviceLoading && (
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-4 h-4 border-2 border-navy border-t-transparent rounded-full animate-spin shrink-0" />
            Generating research-backed advice…
          </div>
        )}

        {adviceError && (
          <p className="text-sm text-red-600">Could not load advice. Please try again.</p>
        )}

        {!adviceLoading && !adviceError && (
          <div className="flex flex-col gap-3">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-sm text-gray-700 leading-relaxed">{para}</p>
            ))}
          </div>
        )}
      </div>

      {weakFactors.length > 0 && (
        <div className="w-full bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 className="text-sm font-bold text-navy mb-3">Top Factors to Improve</h3>
          <div className="flex flex-col gap-2">
            {weakFactors.map((f) => (
              <div key={f.factor} className="flex items-center justify-between text-sm">
                <span className="text-gray-700">{f.factor.replace(/_/g, ' ')}</span>
                <span className="font-semibold text-navy">+{f.potential_gain} pts potential</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={onReset}
        className="w-full py-3 border-2 border-navy text-navy font-semibold rounded-xl hover:bg-navy/5 transition-colors"
      >
        Try Again
      </button>
    </div>
  )
}
