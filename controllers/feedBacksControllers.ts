import { Request, Response } from "express";
import FeedBack from "../model/FeedBack";
export async function addFeedBack(req: Request, res: Response) {
  try {
    const { name, comment, rate } = req.body;
    await FeedBack.create({
      name,
      comment,
      rate,
    });
    res.status(201).json({
      message: "we Appreciate that you tell us about what you fill!",
    });
  } catch (err) {
    res.sendStatus(500);
  }
}
