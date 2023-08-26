import bcrypt from "bcrypt";
import { Request, Response } from "express";
import Employee from "../model/Employee";
export async function login(req: Request, res: Response) {
  try {
    const { name, password } = req.body;
    const user = await Employee.findOne({
      name: name.toLowerCase(),
    }).exec();

    if (!user)
      return res
        .status(401)
        .json({ message: "Unauthorized ! , check name and password" });
    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res
        .status(401)
        .json({ message: "Unauthorized ! , check name and password" });
    if (user.role == 100) {
      return res.status(200).json({ name: "admin" });
    }
    res.status(200).json({ name: "chef" });
  } catch (err) {
    res.sendStatus(500);
  }
}
