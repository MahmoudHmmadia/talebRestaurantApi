import express from "express";
import { validation } from "../../middleware/validation/validation";
import { tableReservationRules } from "../../middleware/validation/rules";
import check from "../../middleware/tablesChecking";
import { handleReservation } from "../../controllers/tableController";

const router = express.Router();

router.post("/", validation(tableReservationRules), check, handleReservation);
export default router;
