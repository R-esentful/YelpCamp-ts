import asyncHandler from "express-async-handler";
import * as bcrypt from "bcrypt";

// Model
import { User } from "../models/userModel";

/**
 * @description Registers the user
 * @route /api/v1/users
 * @access PUBLIC
 */
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new Error("Please provide all required fields");
  }

  const user = await User.findOne({ email });
  if (user) {
    throw new Error("User already exists");
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const user = await User.create({ name, email, password: hashPassword });
    res.status(201).json(user);
  }
});
