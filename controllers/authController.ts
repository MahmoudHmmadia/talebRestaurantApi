import { Request, Response } from "express";
import Employee from "../model/Employee";
export async function login(req: Request, res: Response) {
  try {
    const { name, password } = req.body;
    const admin = await Employee.findOne({
      name: name.toLowerCase(),
    }).exec();
    if (!admin)
      return res
        .status(401)
        .json({ message: "Unauthorized ! , check name and password" });
    const match = password.toLowerCase() === admin.password;
    if (!match)
      return res
        .status(401)
        .json({ message: "Unauthorized ! , check name and password" });
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
}
