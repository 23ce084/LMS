import mongoose, {schema} from "mongoose";
import  JsonWebToken  from "jsonwebtoken";
import bcrypt from  "bcrypt";

const userschema = new schema({

    username :{
        type : String,
        required : true,
        unique : true,
        trim : true,
        index : true
    },

    email  :{
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true,
    },


      fullname  :{
        type : String,
        required : true,
        trim : true,
        lowercase : true,
    },

    avatar : {
        type : String,
        required : true,

    },

    coverimage : {
        type : String,
    },

    watchhistory : {
        type : Schema.Types.ObjectId,
        ref : "video"
    },

    password : {
        type : String,
        required : [true,'Password is required']
    },

    refreshToken :{
        type : String,
    }
},{
    timestamps : true,
})

userschema.pre("save", async function (next) {
  if(this.ismodified("password")) return next();

  this.password = await bcrypt.hash(this.password,10)
  next()

  }
    
)

userschema.methods.ispasswordcorrect = async function 
(password) {
   return await bcrypt.compare(password,this.password)
    
}

userschema.methods.generateaccesstoken = function(){
      return  JsonWebToken.sign(
        {
            _id : this._id,
            email : this.email,
            username : this.username,
            fullname : this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userschema.methods.generateaccesstoken = function(){
    
    return JsonWebToken.sign(
        {
            _id : this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn : process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


export const User = mongoose.model("User",userschema)