// ==> IMPORTS <== //

import express from "express";
import { config } from "dotenv";
import logger from "morgan";
import cors from "cors";
import helmet from "helmet";
import multer from "multer";
import { createStream } from "rotating-file-stream";
import cookieParser from "cookie-parser";
// import corsOptions from "./config/corsOption";
import mongoose from "mongoose";
import path from "path";
import rootRoutes from "./routes/root";
import employeesRoutes from "./routes/employees";
import restaurantRoutes from "./routes/restaurant";
import menuRoutes from "./routes/menu";
import orderRoutes from "./routes/order";
import tableRoutes from "./routes/table";
import customerRoutes from "./routes/customer";
import feedBackRoutes from "./routes/feedBack";
import adminRoutes from "./routes/admin";
import authRoutes from "./routes/auth";

// ==> Main Configuration <== //

config();
const app = express();
const accessLogStream = createStream("accessLog.log", { path: "./logs" });
const storage = multer.diskStorage({
  destination: (_req, _res, callback) => {
    callback(null, "./public/assets/images");
  },
  filename: (_req, file, callback) => {
    callback(null, file.originalname);
  },
});
const upload = multer({ storage });
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cookieParser());
app.use(express.json());
app.use(logger("dev"));
app.use(logger("combined", { stream: accessLogStream }));
app.use(
  "/assets",
  express.static(path.join(__dirname, "public/assets/images"))
);
// ==> ROUTES <== //

app.use("/", rootRoutes);
app.use("/employees", upload.single("image"), employeesRoutes);
app.use("/restaurant", upload.single("image"), restaurantRoutes);
app.use("/menu", menuRoutes);
app.use("/order", orderRoutes);
app.use("/table", tableRoutes);
app.use("/customer", customerRoutes);
app.use("/feedBack", feedBackRoutes);
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);
// ==> Connect To Database And Run The Server <== //

// const LOCAL_DATABASE = process.env.LOCAL_DATABASE;
const DATABASE_URL = process.env.DATABASE_URL_CONNECTION;
const PORT = process.env.PORT;

mongoose
  .connect(DATABASE_URL!)
  .then(() => {
    app.listen(PORT, async () => {
      console.log(`THE SERVER RUNNING ON PORT ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
