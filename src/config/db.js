// const mongoose = require('mongoose');
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("Mongo server connected");
    } catch (error) {
        console.log('error', error);
    }
}

export default connectDB;