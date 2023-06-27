import express from "express";
import { getDetails, getFeedBacks } from "../../controllers/adminController";
const router = express.Router();
router.get("/", getDetails);
router.get("/feedBacks", getFeedBacks);
export default router;
