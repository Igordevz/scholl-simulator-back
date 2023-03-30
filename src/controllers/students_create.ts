import { Request, Response } from "express";
import { UserModel } from "../models/student_models";
import bcrypty from 'bcrypt'
import { v4 as uuidv4 } from 'uuid';

export default async function Student_Create(req: Request, res:Response){

    const { name, email, turma, password  } = req.body

    const hash = await bcrypty.genSalt(12)
    const passwordHash = await bcrypty.hash(password, hash)

    const CreateUser = new UserModel({
        token: uuidv4(),
        email: email,
        name: name,
        turma: turma, 
        password: passwordHash,

        // primeiro objeto refere-se ao boletim, segundo ao horario, terceiro as aulas
        infostudent: [
            {
            ingles: '',
            portugues: '',
            geografia: '',
            matematica: '',
            geometria: ''
           }, 
           {
            ingles: '',
            portugues: '',
            geografia: '',
            matemática: '',
            geometria: ''
           },
           {
            segunda: '',
            terça: '',
            quarta: '',
            quinta: '',
            sexta: '',
           }
        ],
        account_aprovat: false
    })

    const userexits = await UserModel.findOne({ email: email })

    if(userexits){
        return res.status(401).json({ msg: 'Estudante Já existe' })
    }
    if(name == ''){
        return res.status(401).json({ msg: 'write down your name' })
    }
    if(name.lengt < 4){
        return res.status(401).json({ msg: 'enter your full name' })
        
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