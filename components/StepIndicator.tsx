interface Props {
  currentStep: number
  steps: string[]
}

export default function StepIndicator({ currentStep, steps }: Props) {
  return (
    <div className="flex items-start justify-center mb-8">
      {steps.map((label, i) => (
        <div key={i} className="flex items-start">
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                i < currentStep
                  ? 'bg-navy text-white'
                  : i === currentStep
                  ? 'bg-navy text-white ring-4 ring-navy/20'
                  : 'bg-gray-200 text-gray-400'
              }`}
            >
              {i < currentStep ? '✓' : i + 1}
            </div>
            <span
              className={`text-xs mt-1.5 font-medium text-center w-16 ${
                i === currentStep ? 'text-navy' : 'text-gray-400'
              }`}
            >
              {label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`w-12 h-0.5 mt-4 mx-1 transition-all duration-500 ${
                i < currentStep ? 'bg-navy' : 'bg-gray-200'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  )
}
