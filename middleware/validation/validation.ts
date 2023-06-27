import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";

export function validation(schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      let errArr: string[] = [];
      error.details.map((e) => errArr.push(e.message));
      res.status(400).json(errArr);
    } else {
      next();
    }
  };
}
