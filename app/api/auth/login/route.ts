import { type NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"

// Mock user data - in real app, this would come from database
const users = [
  {
    id: 1,
    email: "ved@example.com",
    password: "$2b$10$example_hash_7",
    name: "Ved Patel",
    role: "learner",
  },
  {
    id: 2,
    email: "sarah@example.com",
    password: "$2b$10$example_hash_1",
    name: "Sarah Johnson",
    role: "instructor",
  },
  {
    id: 3,
    email: "admin@skillhive.com",
    password: "$2b$10$example_hash_8",
    name: "Admin User",
    role: "admin",
  },
]

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Find user
    const user = users.find((u) => u.email === email)
    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // For demo purposes, we'll skip password verification
    // In real app: const isValidPassword = await bcrypt.compare(password, user.password)
    const isValidPassword = true

    if (!isValidPassword) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET || "demo-secret",
      { expiresIn: "7d" },
    )

    // Return user data and token
    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
      token,
    })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
