import { Request, Response } from "express";
import { Table } from "../model/Table";
export async function handleReservation(req: Request, res: Response) {
  try {
    const { name, email, phonID, number, date, time, specialRequest } =
      req.body;
    const table = await Table.findOne({
      personsNumber: +number > 7 ? "custom" : +number,
    }).exec();
    if (!table) return res.sendStatus(204);
    if (+number > 7) {
      table.personsNumber = number;
    }
    const sameDate = table.reserved.filter((t) => t.date === date);
    if (sameDate.length > 0) {
      const updatedDate = sameDate[0];
      updatedDate.details.time = [...updatedDate.details.time, time];
      updatedDate.details.email = email ? email : "";
      updatedDate.details.name = name;
      updatedDate.details.phoneID = phonID;
      updatedDate.details.specialRequest = specialRequest;
      table.reserved = [...table.reserved.filter((t) => t.date !== date)];
      table.reserved = [...table.reserved, updatedDate];
    } else {
      table.reserved = [
        ...table.reserved,
        {
          date: date,
          details: {
            time: [time],
            email: email ? email : "",
            name,
            phonID,
            specialRequest,
          },
        },
      ];
    }
    await table.save();
    res.status(200).json({ name, date, time });
  } catch (err) {
    res.status(500);
    console.log(err);
  }
}
