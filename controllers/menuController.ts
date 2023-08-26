import { Request, Response } from "express";
import Menu from "../model/Menu";
export async function getMenu(_req: Request, res: Response) {
  try {
    const menu = await Menu.find();
    if (!menu)
      return res.status(204).json({
        message: "We Are Working In Our Menu To Make It Like What You Wish!",
      });
    res.status(200).json(menu);
  } catch (err) {
    res.status(500).json(err);
  }
}
export async function handleRate(req: Request, res: Response) {
  try {
    const { name, rate, comment } = req.body;
    const { id } = req.params;
    const dish = await Menu.findById(id).exec();
    if (dish) {
      dish.rateArr.push(parseInt(rate));
      dish.peopleComments.push({
        name,
        comment,
      });
      let sum: number = 0;
      for (let i = 0; i < dish?.rateArr.length; i++) {
        sum += dish?.rateArr[i];
      }
      dish.rate = +(sum / dish?.rateArr.length).toFixed(1);
    }
    await dish?.save();
    res.status(200).json({ message: "We Have Got Your Rate On Our Dish !" });
  } catch (err) {
    res.sendStatus(500);
  }
}
export async function getPopular(req: Request, res: Response) {
  try {
    const meals = await Menu.find({ cat: "meal" }).exec();
    if (meals) {
      const popular = meals.sort((a, b) => b.rate - a.rate).slice(0, 4);
      res.status(200).json(popular);
    }
  } catch (err) {
    res.sendStatus(500);
  }
}
export async function deleteDish(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const dish = await Menu.findById(id);
    if (dish) {
      await dish.deleteOne();
      res.sendStatus(200);
    } else res.sendStatus(204);
  } catch (err) {
    res.sendStatus(500);
  }
}
export async function editDishPrice(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { price } = req.body;
    const dish = await Menu.findById(id);
    if (dish) {
      dish.price = price + " SP";
      await dish.save();
      res.sendStatus(200);
    } else res.sendStatus(204);
  } catch (err) {
    res.sendStatus(500);
  }
}
export async function addDish(req: Request, res: Response) {
  try {
    const { name, info, price, imageName, cat } = req.body;
    const newDish = await Menu.create({
      name,
      info,
      price,
      imageName,
      cat,
    });
    res.status(200).json(newDish);
  } catch (err) {
    res.sendStatus(500);
  }
}
