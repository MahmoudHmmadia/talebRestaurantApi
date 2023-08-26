import express from "express";
import {
  getOrders,
  handleMakeFood,
  handleOrder,
  handleDone,
} from "../../controllers/orderController";

const router = express.Router();
router.route("/").post(handleOrder).get(getOrders);
router.post("/makeFood", handleMakeFood);
router.put("/done/:id", handleDone);
export default router;
