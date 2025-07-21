import {v2}  from "cloudinary";
import { log } from "console";
import { response } from "express";
import fs from "fs";

cloudinary.config({
cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
api_key:    process.env.CLOUDINARY_API_KEY,
api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadCloudinary = async (localfilepath) => {
    try{
          if(!localfilepath) return null
         const response =  await cloudinary.uploader.upload(localfilepath,{
            resource_type:"auto",
        
    })
    console.log("file is uploaded on cloudinary",
    response.url);
}
    catch(error){
         fs.unlinkasync(localfilepath)
         return null;f
         
    }

}


export{uploadCloudinary}


// cloudinary.v2.uploader.upload(
//   "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" },
//   function(error, result) {
//     console.log(result);
//   }
// );
