import { Request, Response } from "express";
import Customer from "../model/Customer";
export async function addCustomer(req: Request, res: Response) {
  try {
    const { name, email, phoneID, address } = req.body;
    const conflict = await Customer.findOne({ email }).exec();
    if (conflict)
      return res
        .status(409)
        .json({ message: "you are already one of our customers" });
    await Customer.create({
      name,
      email,
      address,
      phoneID,
    });
    res.status(201).json({
      message: "Welcome To Our Family !",
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
