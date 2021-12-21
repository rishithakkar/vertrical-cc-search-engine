import { Response } from "express";

function response(
  res: Response,
  error: boolean,
  data: any,
  message: string,
  statusCode: number = 200
) {
  res.status(statusCode).json({ error, data, message });
}

export default response;
