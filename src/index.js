// import mongoose, { connect } from "mongoose";    
// import { DB_NAME } from "./constants";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
    path :'./env'
})



connectDB()
.then(() => {
   app.listen( process.env.PORT || 8000,() => {
      console.log(`server is runnibg at port : $ {process.env.PORT}`);
      
   })
})
.catch((error) => {
   console.log("MONGODB CONNECTION ERROR",error);
   
});














/*

import express from "express";
const app = express()


( async ()=> {

   try{
  await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME}') 
  app.on("error", (error) =>{
    console.log("ERROR :",error)
  throw error
  } )

  app.listen(process.env.port,() =>{
  console.log('App is listening on port $ {process.env.port}');
  })
   }
   catch(ERROR){
    console.error = ("ERROR",error)
    throw err
   }

})()
   */