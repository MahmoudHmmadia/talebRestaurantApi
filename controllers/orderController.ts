import { Request, Response } from "express";
import SpecialOrder from "../model/SpecialOrder";
import Order from "../model/Order";
import Menu from "../model/Menu";
export async function handleOrder(req: Request, res: Response) {
  try {
    const { name, address, phoneID, pay, total, createdAt } = req.body;
    const order = await Order.create({
      name,
      address,
      phoneID,
      pay,
      total: total,
      createdAt,
    });
    let sum = 0;
    for (let i = 0; i < total.length; i++) {
      sum += parseInt(total[i].price);
    }
    order.price = sum;
    for (let i = 0; i < total.length; i++) {
      const dish = await Menu.findOne({ name: total[i].name }).exec();
      dish!.orderTimes += total[i].number;
      await dish?.save();
    }
    await order.save();
    res.status(201).json({
      message: "We Are Working In Your Order It Will Be Done Soon",
    });
  } catch (err) {
    res.sendStatus(500);
  }
}

export async function handleMakeFood(req: Request, res: Response) {
  try {
    const { name, address, phoneID, pay, email, specialFood } = req.body;
    await SpecialOrder.create({
      name,
      address,
      phoneID,
      pay,
      email,
      specialFood,
      price: specialFood.type == "pizza" ? 45000 : 38000,
    });
    res.status(200).json({ message: "we've got your special order!" });
  } catch (err) {
    res.sendStatus(500);
  }
}
export async function getOrders(req: Request, res: Response) {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.sendStatus(500);
  }
}
export async function handleDone(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);
    order!.done = true;
    await order?.save();
    res.status(200).json(order);
  } catch (err) {
    res.sendStatus(500);
  }
}
