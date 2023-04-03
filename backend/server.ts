import express from "express";
import dotenv from "dotenv";
import { ConnectDB } from "./config/db";
dotenv.config();

// ENV
const PORT = process.env.PORT;
export const MONGO_URI = process.env.MONGO_URI as string;

// Database
ConnectDB();

// Middlewares
import { errorHandler } from "./middlewares/errorMiddleware";

// Routes
import { userRoute } from "./routes/userRoutes";
import { campgroundRoute } from "./routes/campgroundRoutes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/users", userRoute);
app.use("/api/v1/campgrounds", campgroundRoute);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`);
});
