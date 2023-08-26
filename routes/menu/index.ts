import express from "express";
import {
  deleteDish,
  editDishPrice,
  getMenu,
  getPopular,
  handleRate,
  addDish,
} from "../../controllers/menuController";

const router = express.Router();
router.get("/", getMenu);
router.post("/", addDish);
router.get("/popular", getPopular);
router.post("/rate/:id", handleRate);
router.delete("/:id", deleteDish);
router.put("/:id", editDishPrice);
export default router;
