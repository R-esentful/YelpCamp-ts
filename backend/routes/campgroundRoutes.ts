import { Router } from "express";
export const campgroundRoute = Router();

campgroundRoute.route("/").get();
