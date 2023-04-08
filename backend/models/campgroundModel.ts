import mongoose, { SchemaType } from "mongoose";
const { model, Schema } = mongoose;

interface Image {
  url: string;
  filename: string;
}
interface CampgroundInterface {
  name: string;
  user: object;
  province: string;
  cityOrmunicipalities: string;
  description: string;
  address: string;
  images: Image[];
  amenities: string[];
  activities: string[];
  price: number;
}

const imageSchema = new Schema<Image>({
  url: String,
  filename: String,
});

const campgroundSchema = new Schema<CampgroundInterface>({
  name: {
    type: String,
    required: [true, "Please input a valid campground name"],
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  province: {
    type: String,
    required: [true, "Please enter camp's province location"],
  },
  cityOrmunicipalities: {
    type: String,
    required: [true, "Please enter camp's city or municipalities location"],
  },
  address: {
    type: String,
    required: [true, "Please enter camp's address"],
  },
  description: {
    type: String,
    required: [true, "Please enter camp's description"],
  },
  images: [imageSchema],
  amenities: [{ type: String, enum: ["Campfire", "Shower", "Electric Hookups"] }],
  activities: [{ type: String, enum: ["Hiking", "Fishing", "Swimming"] }],
  price: {
    type: Number,
    default: 0,
  },
});

export const Campground = model<CampgroundInterface>("Campground", campgroundSchema);
