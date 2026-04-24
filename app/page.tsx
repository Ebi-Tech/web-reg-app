import Stepper from '@/components/Stepper'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="bg-navy text-white py-4 px-4 shadow-md">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <span className="text-2xl">🎓</span>
          <div>
            <h1 className="text-lg font-bold leading-tight">Student Score Predictor</h1>
            <p className="text-xs text-blue-200 mt-0.5">Early identification of at-risk students</p>
          </div>
        </div>
      </header>
      <Stepper />
    </main>
  )
}
