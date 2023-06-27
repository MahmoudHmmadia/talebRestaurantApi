import { CorsOptions } from "cors";
const allowedOrigins = [
  "https://www.talebRestauran.render.com",
  "https://talebRestauran.render.com",
  "https://talebAdminDashboard.render.com",
  "https://www.talebAdminDashboard.render.com",
];
const corsOptions: CorsOptions = {
  origin(requestOrigin, callback) {
    if (allowedOrigins.includes(requestOrigin!) || !requestOrigin) {
      callback(null, true);
    } else {
      callback(new Error("NOT ALLOWED BY CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};
export default corsOptions;
