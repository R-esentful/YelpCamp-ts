import mongoose from "mongoose";
import { MONGO_URI } from "../server";

// Connect to MONGODB
export const ConnectDB = async () => {
  try {
    const connect = await mongoose.connect(MONGO_URI);
    console.log(`Mongo Connection established @${connect.connection.host}`);
  } catch (e) {
    console.log(e);
  }
};
