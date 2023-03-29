import  express  from "express";

async function botstrap()  {

    const app = express();
    app.use(express.json());

    const door = 3000
    app.listen(door, () =>{
        console.log('HTTP server running');
    })
}

botstrap();