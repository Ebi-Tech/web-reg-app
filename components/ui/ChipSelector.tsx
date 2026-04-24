'use client'

interface Props {
  label: string
  icon: string
  options: string[]
  value: string
  onChange: (v: string) => void
}

export default function ChipSelector({ label, icon, options, value, onChange }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="text-base">{icon}</span>
        <span className="text-sm font-semibold text-gray-700">{label}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium border-2 transition-colors ${
              value === opt
                ? 'bg-navy border-navy text-white'
                : 'bg-white border-gray-200 text-gray-600 hover:border-navy hover:text-navy'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}
