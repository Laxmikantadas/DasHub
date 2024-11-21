import { userModel } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { errorHandler } from "../utils/ErrorHandler.js";

//User Register
export const registerUser = asyncHandler(async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await userModel.find({ email });
    if (existingUser) {
      throw errorHandler(400, "User is already exist");
    }
    const user = new userModel({
      name,
      email,
      password,
    });
    await user.save();
    
  } catch (error) {
    throw errorHandler(error.statusCode, error.message);
  }
});
