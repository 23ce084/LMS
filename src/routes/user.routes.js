// routes/user.routes.js
import express from "express";
import { registerUser} from "../controllers/user.controler.js";
import { upload } from "../middlewares/multer.middleware.js";
const router = express.Router();

router.post("/register", registerUser).post(
upload.fields([{
          name : "avtar",
          maxcount : 1
},
{
    name : "coverimage",
    maxCount : 1
}] ),
    registerUser
);
// router.get("/login",login)

export default router;
