/* eslint no-console: 0 */
import express, { Request, Response, NextFunction, Router } from "express";

const router = express.Router();

const routes = (): Router => {
  router.get("/", (req: Request, res: Response, next: NextFunction) => {
    console.log("first");
    next();
  });
  router.get("/", (req: Request, res: Response) => {
    res.json({ message: "Test 2" });
    console.log("second");
  });

  router.post("/test", (req: Request, res: Response) => {
    res.json({ message: "Test Post" });
  });

  return router;
};

export default routes;
