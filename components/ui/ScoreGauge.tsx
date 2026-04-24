'use client'

import { useEffect, useState } from 'react'
import { getPerformanceBand, getPerformanceLabel, BAND_COLORS } from '@/lib/types'

// 240° arc: start 150°, end 30° clockwise, center (100,90), r=75
// Start: (35.05, 127.5)  End: (164.95, 127.5)  Top: (100, 15)
const ARC_PATH = 'M 35.05 127.5 A 75 75 0 1 1 164.95 127.5'
const ARC_LENGTH = 314.16 // 2π×75×(240/360)

interface Props {
  score: number
}

export default function ScoreGauge({ score }: Props) {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setAnimated(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const band = getPerformanceBand(score)
  const color = BAND_COLORS[band]
  const progress = (score - 55) / (101 - 55)
  const dashoffset = animated ? ARC_LENGTH * (1 - progress) : ARC_LENGTH

  return (
    <div className="flex flex-col items-center gap-3">
      <svg viewBox="0 0 200 140" className="w-64 h-auto">
        {/* Background track */}
        <path
          d={ARC_PATH}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="14"
          strokeLinecap="round"
        />
        {/* Animated progress arc */}
        <path
          d={ARC_PATH}
          fill="none"
          stroke={color}
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={ARC_LENGTH}
          strokeDashoffset={dashoffset}
          style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1)' }}
        />
        {/* Score number */}
        <text
          x="100"
          y="92"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={color}
          fontSize="32"
          fontWeight="bold"
          fontFamily="inherit"
        >
          {animated ? Math.round(score) : '—'}
        </text>
        {/* Sub-label */}
        <text
          x="100"
          y="116"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#9ca3af"
          fontSize="11"
          fontFamily="inherit"
        >
          out of 101
        </text>
        {/* Min/Max labels */}
        <text x="30" y="136" textAnchor="middle" fill="#d1d5db" fontSize="10">55</text>
        <text x="170" y="136" textAnchor="middle" fill="#d1d5db" fontSize="10">101</text>
      </svg>

      <span
        className="px-5 py-1.5 rounded-full text-sm font-bold text-white"
        style={{ backgroundColor: color }}
      >
        {getPerformanceLabel(band)}
      </span>
    </div>
  )
}
