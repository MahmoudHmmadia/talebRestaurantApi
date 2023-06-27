import express from "express";
import {
  addEmployee,
  fired,
  getEmployees,
  editEmployee,
} from "../../controllers/employeesController";
const router = express.Router();
router.route("/").get(getEmployees).post(fired);
router.post("/add/:id", addEmployee);
router.post("/edit/:id", editEmployee);
export default router;
