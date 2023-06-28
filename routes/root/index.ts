import { fileURLToPath } from "url";
import path, { dirname } from "path";
import express, { Request, Response } from "express";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const router = express.Router();
router.get("^/$|/index(.html)?", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "..", "..", "views", "index.html"));
});
export default router;
