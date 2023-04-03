import mongoose from "mongoose";
const { model, Schema } = mongoose;

interface UserInterface {
  name: string;
  email: string;
  password: string;
}

const userSchema = new Schema<UserInterface>(
  {
    name: {
      type: String,
      required: [true, "Please provide your name."],
    },
    email: {
      type: String,
      required: [true, "Please provide valid email address."],
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
    },
  },
  {
    timestamps: true,
  }
);

export const User = model<UserInterface>("User", userSchema);
