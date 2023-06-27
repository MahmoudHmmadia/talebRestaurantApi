import { customerRules } from "./../../middleware/validation/rules";
import express from "express";
import { addCustomer } from "../../controllers/customerController";
import { validation } from "../../middleware/validation/validation";
const router = express.Router();
router.post("/", validation(customerRules), addCustomer);
export default router;
