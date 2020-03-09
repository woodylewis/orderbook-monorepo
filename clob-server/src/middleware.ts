/* eslint no-console: 0 */
import { Request, Response, NextFunction } from "express";

const tLog = (req: Request, res: Response, next: NextFunction): void => {
  console.log("tLog ");
  next();
};

export default tLog;
