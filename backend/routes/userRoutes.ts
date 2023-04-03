import { Router } from "express";

import { registerUser } from "../controllers/userController";

export const userRoute = Router();

userRoute.post("/", registerUser);
