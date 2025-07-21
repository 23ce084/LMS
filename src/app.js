import express from "express";
import cookieparser from "cookie-parser";
import cors from "cors";


const app = express()

app.use(cors({

    origin : process.env.CORS_ORIGIN,
    Credential : true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended : true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieparser())


//routes import 

import userrouter from './routes/user.routes.js'


//routes declaration

app.use("/api/v1/users",userrouter)

//http://localhost:8000/api/v1/user/register


export{app}