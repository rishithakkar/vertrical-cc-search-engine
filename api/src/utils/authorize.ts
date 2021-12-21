import { Request, Response, NextFunction } from "express";
import response from "./response";
const SECRET_KEY = "f9bf78b9a18ce6d46a0cd2b0b86df9da";

export const authorize = (req: Request, res: Response, next: NextFunction) => {
  if (req.header("seceret-key") != SECRET_KEY) {
    response(res, true, null, "You are not authorised!", 401);
  } else {
    next();
  }
};
