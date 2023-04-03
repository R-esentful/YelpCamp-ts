import mongoose from "mongoose";
const { model, Schema } = mongoose;

interface ReviewsSchema {
  user: object;
  campground: object;
  review: string;
  rate: number;
}

const reviewsSchema = new Schema<ReviewsSchema>({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  campground: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Campground",
  },
  review: {
    type: String,
    required: [true, "Please input a review"],
  },
  rate: {
    type: Number,
    required: [true, "Please rate the campground"],
  },
});

export const Review = model("Review", reviewsSchema);
