import { Router } from "express";

import { registerUser, loginUser } from "../controllers/userController";

export const userRoute = Router();

userRoute.post("/", registerUser);
userRoute.post("/login", loginUser);
