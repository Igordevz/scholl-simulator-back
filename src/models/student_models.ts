import { Document, model, Schema } from "mongoose";

export interface Iuser extends Document{
    name: string,
    email: string,
    turma: string,
    password: string,
    infostudent: [],
    account_aprovat: boolean,
    token: string
}

export const userschema = new Schema<Iuser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    turma: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    infostudent: { 
        type: [],
        required: false
    },
    account_aprovat: {
        type: Boolean,
        required: true,
    },
    token: {
        type: String,
        required: true
    }
}) 

export const UserModel = model<Iuser>('student', userschema)