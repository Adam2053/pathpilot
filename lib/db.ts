import mongoose from "mongoose";

export const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI as string);
    }catch (err) {
        console.log(err);
        throw new Error("Failed to connect to database");
    }
}