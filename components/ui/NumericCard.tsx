'use client'

interface Props {
  label: string
  icon: string
  value: number
  onChange: (v: number) => void
  min: number
  max: number
  unit: string
}

export default function NumericCard({ label, icon, value, onChange, min, max, unit }: Props) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-xl">{icon}</span>
        <span className="text-xs font-semibold text-navy leading-tight">{label}</span>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="w-8 h-8 rounded-full border-2 border-navy text-navy font-bold flex items-center justify-center disabled:opacity-30 hover:bg-navy hover:text-white transition-colors text-lg leading-none"
        >
          −
        </button>
        <div className="text-center">
          <div className="text-2xl font-bold text-navy leading-none">{value}</div>
          <div className="text-xs text-gray-400 mt-0.5">{unit}</div>
        </div>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          className="w-8 h-8 rounded-full border-2 border-navy text-navy font-bold flex items-center justify-center disabled:opacity-30 hover:bg-navy hover:text-white transition-colors text-lg leading-none"
        >
          +
        </button>
      </div>
      <p className="text-xs text-gray-300 text-center">{min}–{max}</p>
    </div>
  )
}
