import { Request, Response } from "express";
import { getCollegeList, getCollegeDetails } from "../services/college.service";
import response from "../utils/response";

export const handleCollegeList = async (req: Request, res: Response) => {
  try {
    const list = await getCollegeList();
    response(res, false, list, "All college data!");
  } catch (err) {
    response(res, true, null, "Something happened wrong!", 400);
  }
};

export const handleCollegeDetails = async (req: Request, res: Response) => {
  try {
    const { clgId } = req.params;
    const list = await getCollegeDetails(clgId);
    response(res, false, list, "College details");
  } catch (err: any) {
    response(res, true, null, err.message || "Something happened wrong!", 400);
  }
};
