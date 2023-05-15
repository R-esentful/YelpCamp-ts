import { Router } from "express";
export const campgroundRoute = Router();

// Controller
import {
  getCampgrounds,
  newCampground,
  uploadCampgroundImage,
} from "../controllers/campgroundController";

campgroundRoute.route("/").get(getCampgrounds).post(newCampground);
campgroundRoute.post("/upload-image", uploadCampgroundImage);
