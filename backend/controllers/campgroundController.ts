import { general_error_message } from "./../utilities/variables";
import axios from "axios";
import asyncHandler from "express-async-handler";
import { Campground } from "../models/campgroundModel";

export const newCampground = asyncHandler(async (req, res) => {
  const { CampName, Province, CityOrMunicipalities, Address, Description, Amenities, Activities } =
    req.body;

  if (
    !CampName ||
    !Province ||
    !CityOrMunicipalities ||
    !Address ||
    !Description ||
    !Amenities ||
    !Activities
  ) {
    throw new Error(general_error_message);
  }

  const campground = await Campground.findOne({ name: CampName });

  if (campground) {
    throw new Error("Campground already exists");
  } else {
    const campground = new Campground({
      user: "64301d98b706d0a3e763b840",
      name: CampName,
      province: Province,
      cityOrmunicipalities: CityOrMunicipalities,
      address: Address,
      description: Description,
      amenities: Amenities,
      activities: Activities,
    });
    campground.save();
    res.status(200).json({
      campground,
    });
  }
});
