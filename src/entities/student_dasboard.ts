import { Request, Response } from "express";
import { UserModel } from "../models/student_models";

export default async function StudentDashboard(req:Request, res:Response){

    const { token } = req.body

    const data = await UserModel.findOne({ token: token })
    
    

}