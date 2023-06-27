import express from "express";
import {
  getOrders,
  handleMakeFood,
  handleOrder,
} from "../../controllers/orderController";

const router = express.Router();
router.route("/").post(handleOrder).get(getOrders);
router.post("/makeFood", handleMakeFood);
export default router;
