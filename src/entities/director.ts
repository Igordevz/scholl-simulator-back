import { Request, Response } from "express";
import { UserModel } from "../models/student_models";

export default async function DirectorPrivate(req: Request, res:Response){

    const { password, account_aprovat, email } = req.body

    const aprovat = {
        account_aprovat,
    }
    if(password == 'admin'){
        const updateStudent = await UserModel.updateOne({email: email}, aprovat)
        return res.status(200).json({ msg: "Atualizou com sucesso", updateStudent})
    }
    if(password != 'admin'){
        return res.status(200).json({ msg: "Admin incorreto"})
    }
}