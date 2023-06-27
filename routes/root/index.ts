import express, { Request, Response } from "express";
const rootRoutes = express.Router();
rootRoutes.get("/", (_req: Request, res: Response) => {
  res.status(200).send("bla");
});
export default rootRoutes;
