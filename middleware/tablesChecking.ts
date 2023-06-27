import { NextFunction, Request, Response } from "express";
import { Table } from "../model/Table";
async function check(req: Request, res: Response, next: NextFunction) {
  const { date, time, number } = req.body;
  const table = await Table.findOne({
    personsNumber: parseInt(number),
  }).exec();
  if (table) {
    const sameDate = table.reserved.filter(
      (t: {
        date: string;
        details: {
          time: string[];
          name: string;
          email: string;
          phoneID: string;
        };
      }) => t.date === date
    );
    if (sameDate.length > 0 && sameDate[0].details.time.includes(time)) {
      return res.sendStatus(204);
    } else next();
  } else next();
}
export default check;
