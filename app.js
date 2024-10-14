const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const toDoRouter = require("./routes/ToDoRoutes");
const handleErrors = require("./middlewares/ErrorHandler");

const app = express();

// Load environment variables from .env file
dotenv.config();

// middlewares for parsing requests and enabling cors
app.use(express.json());
app.use(cors());
app.use(handleErrors);

app.use("/todo", toDoRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is listening on Port:${PORT}`);
    connectDB();
});



