import mongoose, { SchemaType } from "mongoose";
const { model, Schema } = mongoose;

interface Image {
  url: string;
  filename: string;
}

interface CampgroundInterface {
  name: string;
  user: object;
  images: Image[];
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
    requred: true,
    ref: "User",
  },
  images: [imageSchema],
});

export const Campground = model<CampgroundInterface>("Campground", campgroundSchema);
