import { PrismaClient } from "@prisma/client"
import { logger } from "../utils/logger"

declare global {
  var __prisma: PrismaClient | undefined
}

export const prisma =
  globalThis.__prisma ||
  new PrismaClient({
    log: ["query", "info", "warn", "error"],
  })

if (process.env.NODE_ENV !== "production") {
  globalThis.__prisma = prisma
}

export const connectDatabase = async () => {
  try {
    await prisma.$connect()
    logger.info("Database connected successfully")
  } catch (error) {
    logger.error("Database connection failed:", error)
    throw error
  }
}

export const disconnectDatabase = async () => {
  try {
    await prisma.$disconnect()
    logger.info("Database disconnected")
  } catch (error) {
    logger.error("Database disconnection failed:", error)
  }
}

// Handle graceful shutdown
process.on("beforeExit", async () => {
  await disconnectDatabase()
})
