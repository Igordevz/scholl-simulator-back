import { Request, Response } from "express";
import { UserModel } from "../models/student_models";
import bcrypt from 'bcrypt'
export default async function Student_Auth(req: Request, res:Response){

    const { email, password } = req.body

    const user:any = await UserModel.findOne({ email: email })
    if(!user){
        return res.status(401).json({ msg: 'usuário ou senhas não existem' });
    }
    
    const checkPass = await bcrypt.compare(password, user.password);
 
    if(!checkPass){
        return res.status(401).json({ msg: 'usuário ou senhas não existem' });
    }


    return res.status(200).json(user)
}