import dotenv from "dotenv"

dotenv.config()

export const config = {
  // Server
  port: Number.parseInt(process.env.PORT || "5000"),
  nodeEnv: process.env.NODE_ENV || "development",

  // Database (optional for dummy credentials)
  databaseUrl: process.env.DATABASE_URL || "dummy://localhost:5432/dummy",

  // JWT
  jwtSecret: process.env.JWT_SECRET!,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",

  // Client
  clientUrl: process.env.CLIENT_URL || "http://localhost:3000",

  // Google OAuth (optional - can be empty for testing)
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,

  // Cloudinary (optional - can be empty for testing)
  cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
  cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,

  // Email (optional - can be empty for testing)
  emailHost: process.env.EMAIL_HOST,
  emailPort: Number.parseInt(process.env.EMAIL_PORT || "587"),
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,

  // Stripe (optional - can be empty for testing)
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET,

  // Redis (optional - can be empty for testing)
  redisUrl: process.env.REDIS_URL,
}

// Validate required environment variables (only JWT_SECRET is required)
// const requiredEnvVars = ["JWT_SECRET"]
// for (const envVar of requiredEnvVars) {
//   if (!process.env[envVar]) {
//     throw new Error(`Missing required environment variable: ${envVar}`)
//   }
// }
