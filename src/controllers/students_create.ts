import { Request, Response } from "express";
import { UserModel } from "../models/student_models";
import bcrypty from 'bcrypt'

export async function Student_Create(req: Request, res:Response){

    const { name, email, turma, password  } = req.body

    const hash = await bcrypty.genSalt(12)
    const passwordHash = await bcrypty.hash(password, hash)

    const CreateUser = new UserModel({
        email: email,
        name: name,
        turma: turma, 
        password: passwordHash
    })

    const userexits = await UserModel.findOne({ email: email })

    if(userexits){
        return res.status(401).json({ msg: 'Estudante Já existe' })
    }
    if(name == ''){
        return res.status(401).json({ msg: 'write down your name' })
    }
    if(password.length < 6){
        return res.status(401).json({ msg: 'Your password must contain at least 6 characters' })
    }
    if(turma == '' ){
        return res.status(401).json({ msg: 'the class field cannot be empty' })
    }

    const Addstudent = await UserModel.create(CreateUser);

    return res.status(201).json(Addstudent);

}