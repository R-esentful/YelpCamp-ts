import { Router } from "express";
export const campgroundRoute = Router();

// Controller
import { newCampground } from "../controllers/campgroundController";

campgroundRoute.route("/").get().post(newCampground);
