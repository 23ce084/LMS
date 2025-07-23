import { asynchandler } from "../utils/asynchandler.js";
import {apierror} from "../utils/apierror.js";
import {User} from "../utils/user.model.js";
import { uploadCloudinary } from "../utils/cloudinary.js";
import {apiresponse} from "../utils/apiresponse.js";
const registerUser = asynchandler(async (req,res) => {
   

    const{fullname,email,username,password} = req.body
    console.log("email :",email);

if(
[fullname,email,username,password].some((field) => field?.trim() === "" )    
){
    throw new apierror(400,"all fields are required")
    
}

  const existedUser = User.findone({ 
    $or:[{username},{email}]

   
 })
  
    if(existedUser){
         throw new apierror(409,"user with email or username is exist");
         
    }

    const avtarlocalpath = req.files?.avtar[0]?.path
    const coverimagelocalpath = req.file?.coverimage[0]?.path

    if(!avtarlocalpath){
      throw new apierror(400,"avtar file is required");

    }
     
    const avtar = await uploadCloudinary(avtarlocalpath)
   const coverimage = await  uploadCloudinary(coverimagelocalpath)

   if(!avtar){
      throw new apierror(400,"avtar file is required");

    }

    const user = await username.create({
      fullname,
      avtar : avtar.url,
      coverimage : coverimage?.url || "",
      email,
      password,
      username : username.tolowercase()
    })

    const createduser = await user.findbyid (user._id).select(
      "-password -refreshToken"
    )

    if(!createduser){
      throw new apierror(500,"something went wrong while registring the user")
    }

    return res.status(201).json(
      new apiresponse(200,createduser,"user registered successfully")
    )
  }
)

export {registerUser}