import  express  from "express";
import { ConectMongosse } from "./database/database";
import { router } from "./routers/router";
import * as dotenv from 'dotenv'
dotenv.config()
async function botstrap()  {

    const app = express();
    app.use(express.json());
    app.use(router)
    await ConectMongosse();
    const door = 3000
    app.listen(door, () =>{
        console.log('HTTP server running');
    })
}

botstrap();