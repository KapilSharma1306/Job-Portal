import e from "express";
import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        const connect = mongoose.connect(`${process.env.MONGOBD_URL}`)
        console.log('DB connect successfully...!')
    } catch (error) {
        console.log(error)
    }
}