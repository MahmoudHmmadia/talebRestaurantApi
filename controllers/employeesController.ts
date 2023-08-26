import { Request, Response } from "express";
import Employee from "../model/Employee";
import fs from "fs";
export async function getEmployees(req: Request, res: Response) {
  try {
    const employees = await Employee.find();
    if (!employees.length)
      return res.status(204).send("There Is No Employees Yet !");
    else
      res
        .status(200)
        .json(employees.filter((employee) => employee.role == 101));
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "The Server Is Not Working Write Now , Try Again Letter",
    });
  }
}
export async function fired(req: Request, res: Response) {
  try {
    const { id } = await req.body;
    const employee = await Employee.findById(id).exec();
    if (!employee) {
      return res.status(204).send("There Is No Employee With This Id!");
    } else {
      let name = employee.name;
      fs.unlink(`./public/assets/images/${employee.image}`, (err) => {
        if (err) throw err;
        else console.log("well");
      });
      employee.image = "";
      employee.name = "";
      employee.salary = 0;
      employee.age = 0;
      employee.phoneID = 0;
      employee.address = "";
      employee.social = [];
      await employee.save();
      res.status(200).json({
        message: `${name} is fired , you need a ${employee.jobTitle} now!`,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "The Server Is Not Working Write Now , Try Again Letter",
    });
  }
}
export async function addEmployee(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { name, age, salary, image, facebook, instagram, gmail, linkedin } =
      req.body;
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(204).send("There Is No Employee With This Id!");
    } else {
      employee.name = name;
      employee.salary = salary;
      employee.age = age;
      employee.image = image;
      employee.social = [
        { name: "facebook", address: facebook },
        { name: "gmail", address: gmail },
        { name: "linkedin", address: linkedin },
        { name: "instagram", address: instagram },
      ];
      await employee.save();
      res.sendStatus(200);
    }
  } catch (err) {
    res.sendStatus(500);
  }
}
export async function editEmployee(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { salary } = req.body;
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(204).send("There Is No Employee With This Id!");
    } else {
      employee.salary = salary;
      await employee.save();
      res.sendStatus(200);
    }
  } catch (err) {
    res.sendStatus(500);
  }
}
