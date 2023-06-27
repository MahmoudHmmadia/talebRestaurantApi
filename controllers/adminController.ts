import { Request, Response } from "express";
import Customer from "../model/Customer";
import Order from "../model/Order";
import Employee from "../model/Employee";
import SpecialOrder from "../model/SpecialOrder";
import FeedBack from "../model/FeedBack";
export async function getDetails(req: Request, res: Response) {
  try {
    const customers = await Customer.find();
    const orders = await Order.find();
    const specialOrders = await SpecialOrder.find();
    const latestOrders = await Order.find().sort({ _id: -1 }).limit(5).exec();
    const employees = await Employee.find();
    const feedBacks = await FeedBack.find().sort({ _id: -1 }).limit(5).exec();
    let revenues: number = 0;
    orders.forEach((order) => {
      revenues += order.price;
    });
    specialOrders.forEach((order) => {
      revenues += order.price;
    });
    res.status(200).json({
      customers: customers.length,
      revenues,
      expenses: 0,
      employees: employees.length,
      latestOrders,
      feedBacks,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
export async function getFeedBacks(req: Request, res: Response) {
  const feedBacks = await FeedBack.find();
  res.status(200).json(feedBacks);
  try {
  } catch (err) {
    res.sendStatus(500);
  }
}
