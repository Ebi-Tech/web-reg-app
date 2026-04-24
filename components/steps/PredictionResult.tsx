'use client'

import ScoreGauge from '@/components/ui/ScoreGauge'
import { getPerformanceBand, type PerformanceBand } from '@/lib/types'

const TIPS: Record<PerformanceBand, string[]> = {
  high: [
    'Outstanding! Your study habits and support system are working.',
    'Consider mentoring peers — teaching reinforces your own understanding.',
    'Challenge yourself with advanced topics or competitions to keep growing.',
  ],
  'on-track': [
    "You're doing well. A small push can get you to the top.",
    'Try spaced repetition to lock in what you study — review material after 1 day, 1 week, 1 month.',
    'Increasing your study hours by just 2–3 hours a week can make a significant difference.',
  ],
  'needs-support': [
    'Focus on attendance first — missing class is the fastest way to fall further behind.',
    'Look into free tutoring resources at your school or on platforms like Khan Academy.',
    'Break study sessions into focused 25-minute blocks (Pomodoro technique) to improve concentration.',
  ],
  'at-risk': [
    'Talk to your teacher or school counselor — early support makes the biggest difference.',
    'Prioritize showing up to class consistently, even when it feels difficult.',
    'Identify your biggest barrier (motivation, resources, home environment) and tackle that one thing first.',
  ],
}

interface Props {
  score: number
  onReset: () => void
}

export default function PredictionResult({ score, onReset }: Props) {
  const band = getPerformanceBand(score)
  const tips = TIPS[band]

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="text-center">
        <h2 className="text-xl font-bold text-navy">Your Predicted Score</h2>
        <p className="text-sm text-gray-500 mt-1">Based on your profile</p>
      </div>

      <ScoreGauge score={score} />

      <div className="w-full bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <h3 className="text-sm font-bold text-navy mb-3">Personalised Tips</h3>
        <ul className="flex flex-col gap-3">
          {tips.map((tip, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-gray-700">
              <span className="text-navy font-bold shrink-0 mt-px">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

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
