import mongoose from "mongoose";
import { logger } from "../utils/logger";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/skillhive";

export const connectDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    logger.info("MongoDB connected successfully");
  } catch (error) {
    logger.error("MongoDB connection failed:", error);
    throw error;
  }
};

export const disconnectDatabase = async () => {
  try {
    await mongoose.disconnect();
    logger.info("MongoDB disconnected");
  } catch (error) {
    logger.error("MongoDB disconnection failed:", error);
  }
};

// Handle graceful shutdown
process.on("beforeExit", async () => {
  await disconnectDatabase();
});
