import axios from "axios"
import type { User } from "@/types"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token")
      window.location.href = "/login"
    }
    return Promise.reject(error)
  },
)

export const authApi = {
  async login(email: string, password: string) {
    const response = await api.post("/auth/login", { email, password })
    return response.data
  },

  async register(data: {
    name: string
    email: string
    password: string
    role: "learner" | "instructor"
  }) {
    const response = await api.post("/auth/register", data)
    return response.data
  },

  async getProfile(): Promise<User> {
    const response = await api.get("/auth/profile")
    return response.data
  },

  async updateProfile(data: Partial<User>) {
    const response = await api.put("/auth/profile", data)
    return response.data
  },

  async changePassword(currentPassword: string, newPassword: string) {
    const response = await api.put("/auth/change-password", {
      currentPassword,
      newPassword,
    })
    return response.data
  },

  async forgotPassword(email: string) {
    const response = await api.post("/auth/forgot-password", { email })
    return response.data
  },

  async resetPassword(token: string, password: string) {
    const response = await api.post("/auth/reset-password", { token, password })
    return response.data
  },

  async verifyEmail(token: string) {
    const response = await api.post("/auth/verify-email", { token })
    return response.data
  },

  async resendVerification() {
    const response = await api.post("/auth/resend-verification")
    return response.data
  },
}

export default api
