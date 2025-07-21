// routes/user.routes.js
import express from "express";
import { registerUser,login } from "../controllers/user.controler.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/login",login)

export default router;
