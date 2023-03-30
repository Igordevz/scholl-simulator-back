import  Router  from "express";
import DirectorPrivateDelete from "../controllers/Deletestudent";
import  Student_Create  from '../controllers/students_create'
import Student_Auth from "../controllers/student_authentication";
import DirectorPrivate from "../entities/director";
export const router = Router();

router.get('/', (req, res) =>{
    res.status(200).send('hello api')
})

router.post('/student-create', Student_Create)

router.post('/student_auth', Student_Auth)

router.put('/directorPrivate', DirectorPrivate)

router.delete('/directorPrivate', DirectorPrivateDelete)
