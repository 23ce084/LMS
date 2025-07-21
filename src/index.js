// Load environment variables
import dotenv from "dotenv";
dotenv.config();

// Import required modules
import express from "express";
import mongoose from "mongoose";
import cookieparser from "cookie-parser";
import cors from "cors";

// Initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended : true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieparser())
//routes import 

import userrouter from './routes/user.routes.js'


app.use("/api/v1/users",userrouter)
// Get Mongo URI from env
const MONGO_URI = process.env.MONGO_URI;

// Check if URI is missing
if (!MONGO_URI) {
  console.error("❌ MONGO_URI is not defined in your .env file");
  process.exit(1);
}

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ MONGODB CONNECTED SUCCESSFULLY");

    // Start server after DB connects
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MONGODB CONNECTION ERROR", err.message);
  });
