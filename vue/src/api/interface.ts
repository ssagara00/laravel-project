export interface StudyRecord {
  id: number
  date: Date
  hour: number
  user_id: number
}

export interface User {
  id: number
  name: String
  email: String
}

export interface SignInParams {
  email: string
  password: string
}
