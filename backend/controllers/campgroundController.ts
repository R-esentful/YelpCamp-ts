import { general_error_message } from "./../utilities/variables";
import asyncHandler from "express-async-handler";
import { Campground } from "../models/campgroundModel";
import { checkFolder, uploadImage } from "../utilities/aws";

/**
 * @description Gets all of the campground
 * @method GET
 * @route api/v1/campgrounds
 * @access private
 */
export const getCampgrounds = asyncHandler(async (req, res) => {
  const campgrounds = await Campground.find();
  console.log(campgrounds);
  res.status(200).json(campgrounds);
});

/**
 * @description Creates campground
 * @method POST
 * @route api/v1/campgrounds
 * @access private
 */
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

    await checkFolder(campground._id.toString(), "campgrounds");

    res.status(200).json({
      campground,
    });
  }
});

export const uploadCampgroundImage = asyncHandler(async (req, res) => {
  const { id, imageNo, type } = req.body;

  if (!id || !imageNo || !type) {
    throw new Error(general_error_message);
  }
  const { signedURL, key, imageType } = await uploadImage(id, imageNo, "campgrounds", type);
  const campground = await Campground.findById(id);

  campground?.images.push({ url: key, filename: `${imageNo}.${imageType}` });
  await campground?.save();
  res.status(200).json({ url: signedURL });
});
