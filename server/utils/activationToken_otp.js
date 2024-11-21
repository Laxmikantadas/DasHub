import jwt from "jsonwebtoken";
import { errorHandler } from "./ErrorHandler";

export const createActivationToken_Otp = (user) => {
  try {
    // Generate a random 4-digit OTP
    const activeCode = Math.floor(1000 + Math.random() * 9000).toString();

    // Create a JWT token with user and OTP
    const token = jwt.sign({ user, activeCode }, process.env.ACTIVATION_SECRET, {
      expiresIn: '5m',
    });

    // Return the token and OTP
    return { token, activeCode };
  } catch (error) {
    throw errorHandler(400,"Failed to create activation token or OTP. Please try again.");
  }
};
