import { general_error_message } from "./../utilities/variables";
import asyncHandler from "express-async-handler";
import { sign } from "jsonwebtoken";
import * as bcrypt from "bcrypt";

const secret: any = process.env!.SECRET_KEY;

// Model
import { User } from "../models/userModel";
/**
 * @description Registers the user
 * @route /api/v1/users
 * @access PUBLIC
 */
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, location } = req.body;

  if (!name || !email || !password || !location) {
    throw new Error(general_error_message);
  }

  const user = await User.findOne({ email });
  if (user) {
    throw new Error("User already exists");
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const user = await User.create({ name, email, password: hashPassword, location });
    res.status(201).json(user);
  }
});

/**
 * @description Logs the user
 * @route /api/v1/login
 * @access PUBLIC
 */
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Error(general_error_message);
  }
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res
      .status(200)
      .json({ user: { id: user.id, email: user.email, token: generateJWT(user._id as any) } });
  } else {
    throw new Error("Account does not exists.");
  }
});

/**
 * @description Generates JSON Web Token
 */
const generateJWT = (id: string) => {
  return sign({ id }, secret, { expiresIn: "30d" });
};
