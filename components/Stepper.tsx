'use client'

import { useState } from 'react'
import StepIndicator from './StepIndicator'
import AcademicProfile from './steps/AcademicProfile'
import LearningEnvironment from './steps/LearningEnvironment'
import PredictionResult from './steps/PredictionResult'
import { predictScore } from '@/lib/api'
import type { StudentInput } from '@/lib/types'

const DEFAULT: StudentInput = {
  Hours_Studied: 20,
  Attendance: 80,
  Sleep_Hours: 7,
  Previous_Scores: 70,
  Tutoring_Sessions: 2,
  Physical_Activity: 3,
  Parental_Involvement: 'Medium',
  Access_to_Resources: 'Medium',
  Extracurricular_Activities: 'No',
  Motivation_Level: 'Medium',
  Internet_Access: 'Yes',
  Family_Income: 'Medium',
  Teacher_Quality: 'Medium',
  School_Type: 'Public',
  Peer_Influence: 'Neutral',
  Learning_Disabilities: 'No',
  Parental_Education_Level: 'College',
  Distance_from_Home: 'Near',
}

const STEP_LABELS = ['Academic', 'Environment', 'Result']

export default function Stepper() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<StudentInput>(DEFAULT)
  const [score, setScore] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function updateField<K extends keyof StudentInput>(key: K, value: StudentInput[K]) {
    setData((prev) => ({ ...prev, [key]: value }))
  }

  async function handlePredict() {
    setLoading(true)
    setError(null)
    try {
      const res = await predictScore(data)
      setScore(res.predicted_exam_score)
      setStep(2)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Prediction failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  function handleReset() {
    setStep(0)
    setScore(null)
    setError(null)
    setData(DEFAULT)
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      <StepIndicator currentStep={step} steps={STEP_LABELS} />

      {error && (
        <div className="mb-5 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
          {error}
        </div>
      )}

      {step === 0 && (
        <AcademicProfile
          data={data}
          onChange={(key, value) => updateField(key, value)}
          onNext={() => setStep(1)}
        />
      )}

      {step === 1 && (
        <LearningEnvironment
          data={data}
          onChange={(key, value) => updateField(key, value as StudentInput[typeof key])}
          onNext={handlePredict}
          onBack={() => setStep(0)}
          loading={loading}
        />
      )}

      {step === 2 && score !== null && (
        <PredictionResult score={score} onReset={handleReset} />
      )}
    </div>
  )
}
