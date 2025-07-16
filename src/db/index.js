import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";

dotenv.config(); // Make sure this is present and at the top

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`\n✅ MONGODB CONNECTED! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("❌ mongoDB connection ERROR:", error);
        process.exit(1);
    }
};

export default connectDB;
