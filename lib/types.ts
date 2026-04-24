export interface StudentInput {
  Hours_Studied: number
  Attendance: number
  Sleep_Hours: number
  Previous_Scores: number
  Tutoring_Sessions: number
  Physical_Activity: number
  Parental_Involvement: 'Low' | 'Medium' | 'High'
  Access_to_Resources: 'Low' | 'Medium' | 'High'
  Extracurricular_Activities: 'Yes' | 'No'
  Motivation_Level: 'Low' | 'Medium' | 'High'
  Internet_Access: 'Yes' | 'No'
  Family_Income: 'Low' | 'Medium' | 'High'
  Teacher_Quality: 'Low' | 'Medium' | 'High'
  School_Type: 'Public' | 'Private'
  Peer_Influence: 'Positive' | 'Neutral' | 'Negative'
  Learning_Disabilities: 'Yes' | 'No'
  Parental_Education_Level: 'High School' | 'College' | 'Postgraduate'
  Distance_from_Home: 'Near' | 'Moderate' | 'Far'
}

export interface PredictionResponse {
  predicted_exam_score: number
  unit: string
  score_range: string
}

export type PerformanceBand = 'high' | 'on-track' | 'needs-support' | 'at-risk'

export function getPerformanceBand(score: number): PerformanceBand {
  if (score >= 85) return 'high'
  if (score >= 70) return 'on-track'
  if (score >= 60) return 'needs-support'
  return 'at-risk'
}

export function getPerformanceLabel(band: PerformanceBand): string {
  const labels: Record<PerformanceBand, string> = {
    'high': 'High Performer',
    'on-track': 'On Track',
    'needs-support': 'Needs Support',
    'at-risk': 'At Risk',
  }
  return labels[band]
}

export const BAND_COLORS: Record<PerformanceBand, string> = {
  'high': '#2E7D32',
  'on-track': '#0f3460',
  'needs-support': '#F57F17',
  'at-risk': '#C62828',
}
