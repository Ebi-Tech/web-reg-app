'use client'

import NumericCard from '@/components/ui/NumericCard'
import type { StudentInput } from '@/lib/types'

type NumericKey = 'Hours_Studied' | 'Attendance' | 'Sleep_Hours' | 'Previous_Scores' | 'Tutoring_Sessions' | 'Physical_Activity'

const FIELDS: { key: NumericKey; label: string; icon: string; min: number; max: number; unit: string }[] = [
  { key: 'Hours_Studied',     label: 'Hours Studied',     icon: '📚', min: 1,  max: 44,  unit: 'hrs/week' },
  { key: 'Attendance',        label: 'Attendance',        icon: '📅', min: 60, max: 100, unit: '%' },
  { key: 'Sleep_Hours',       label: 'Sleep Hours',       icon: '🌙', min: 4,  max: 10,  unit: 'hrs/day' },
  { key: 'Previous_Scores',   label: 'Previous Score',    icon: '📝', min: 50, max: 100, unit: 'pts' },
  { key: 'Tutoring_Sessions', label: 'Tutoring Sessions', icon: '👥', min: 0,  max: 8,   unit: '/month' },
  { key: 'Physical_Activity', label: 'Physical Activity', icon: '🏃', min: 0,  max: 6,   unit: 'hrs/week' },
]

interface Props {
  data: Pick<StudentInput, NumericKey>
  onChange: (key: NumericKey, value: number) => void
  onNext: () => void
}

export default function AcademicProfile({ data, onChange, onNext }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-navy">Academic Profile</h2>
        <p className="text-sm text-gray-500 mt-1">Your study habits and academic history</p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {FIELDS.map(({ key, label, icon, min, max, unit }) => (
          <NumericCard
            key={key}
            label={label}
            icon={icon}
            value={data[key]}
            onChange={(v) => onChange(key, v)}
            min={min}
            max={max}
            unit={unit}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={onNext}
        className="w-full py-3 bg-navy text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
      >
        Continue →
      </button>
    </div>
  )
}
