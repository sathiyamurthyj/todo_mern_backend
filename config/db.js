const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

//function to establish connection with MongoDB
const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.log("Error connecting to DB:", error);
    }
};

module.exports = connectDB;