import express from "express";
import {
  getMenu,
  getPopular,
  handleRate,
} from "../../controllers/menuController";

const router = express.Router();
router.get("/", getMenu);
router.get("/popular", getPopular);
router.post("/rate/:id", handleRate);
export default router;
