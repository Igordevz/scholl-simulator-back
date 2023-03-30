import { Request, Response } from "express";
import { UserModel } from "../models/student_models";

export default async function DirectorPrivateDelete(req: Request, res:Response){

    const { password, email } = req.body

    if(password == 'admin'){
        const updateStudent = await UserModel.deleteOne({email: email})
        return res.status(200).json({ msg: "Removido com sucesso", updateStudent})
    }
    if(password != 'admin'){
        return res.status(200).json({ msg: "Admin incorreto"})
    }
}