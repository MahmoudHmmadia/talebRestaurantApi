import express from "express";
import { addFeedBack } from "../../controllers/feedBacksControllers";
const router = express.Router();
router.post("/", addFeedBack);
export default router;
