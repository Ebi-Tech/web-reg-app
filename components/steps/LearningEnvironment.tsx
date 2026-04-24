'use client'

import ChipSelector from '@/components/ui/ChipSelector'
import type { StudentInput } from '@/lib/types'

type CatKey =
  | 'Parental_Involvement' | 'Access_to_Resources' | 'Motivation_Level'
  | 'Family_Income' | 'Teacher_Quality' | 'Peer_Influence'
  | 'Parental_Education_Level' | 'Distance_from_Home' | 'School_Type'
  | 'Internet_Access' | 'Extracurricular_Activities' | 'Learning_Disabilities'

const FIELDS: { key: CatKey; label: string; icon: string; options: string[] }[] = [
  { key: 'Parental_Involvement',      label: 'Parental Involvement',  icon: '👨‍👩‍👧', options: ['Low', 'Medium', 'High'] },
  { key: 'Access_to_Resources',       label: 'Access to Resources',   icon: '📖', options: ['Low', 'Medium', 'High'] },
  { key: 'Motivation_Level',          label: 'Motivation Level',      icon: '💪', options: ['Low', 'Medium', 'High'] },
  { key: 'Family_Income',             label: 'Family Income',         icon: '💰', options: ['Low', 'Medium', 'High'] },
  { key: 'Teacher_Quality',           label: 'Teacher Quality',       icon: '👩‍🏫', options: ['Low', 'Medium', 'High'] },
  { key: 'Peer_Influence',            label: 'Peer Influence',        icon: '🤝', options: ['Positive', 'Neutral', 'Negative'] },
  { key: 'Parental_Education_Level',  label: 'Parental Education',    icon: '🎓', options: ['High School', 'College', 'Postgraduate'] },
  { key: 'Distance_from_Home',        label: 'Distance from School',  icon: '🏠', options: ['Near', 'Moderate', 'Far'] },
  { key: 'School_Type',               label: 'School Type',           icon: '🏫', options: ['Public', 'Private'] },
  { key: 'Internet_Access',           label: 'Internet Access',       icon: '🌐', options: ['Yes', 'No'] },
  { key: 'Extracurricular_Activities',label: 'Extracurriculars',      icon: '⚽', options: ['Yes', 'No'] },
  { key: 'Learning_Disabilities',     label: 'Learning Disabilities', icon: '📋', options: ['Yes', 'No'] },
]

interface Props {
  data: Pick<StudentInput, CatKey>
  onChange: (key: CatKey, value: string) => void
  onNext: () => void
  onBack: () => void
  loading: boolean
}

export default function LearningEnvironment({ data, onChange, onNext, onBack, loading }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-navy">Learning Environment</h2>
        <p className="text-sm text-gray-500 mt-1">Your background and support factors</p>
      </div>

      <div className="flex flex-col gap-5">
        {FIELDS.map(({ key, label, icon, options }) => (
          <ChipSelector
            key={key}
            label={label}
            icon={icon}
            options={options}
            value={data[key] as string}
            onChange={(v) => onChange(key, v)}
          />
        ))}
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          disabled={loading}
          className="px-6 py-3 border-2 border-navy text-navy font-semibold rounded-xl hover:bg-navy/5 transition-colors disabled:opacity-50"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={loading}
          className="flex-1 py-3 bg-navy text-white font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Predicting...
            </>
          ) : (
            'Predict Score →'
          )}
        </button>
      </div>
    </div>
  )
}
