const mongoose = require("mongoose");

// Define ToDoSchema
const toDoSchema = mongoose.Schema({
    task:{
        type: String,
        required: true
    },
    category:{
        type: String,
        enum: ["Work", "Personal", "Home", "Urgent"],
        default: "Personal"
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
},{timestamps: true});

// Create a Mongoose model 'ToDo' based on toDoSchema
const ToDo = mongoose.model("ToDo", toDoSchema);

module.exports = ToDo;