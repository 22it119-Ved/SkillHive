export interface User {
  id: string
  name: string
  email: string
  role: "student" | "faculty"
  avatar?: string
  bio?: string
  is_active?: boolean
  created_at?: string
  updated_at?: string
}

export interface AuthResponse {
  user: User
  token: string
  message: string
}

export interface ApiError {
  message: string
  status: number
}

