// import data model
const ToDo = require("../models/ToDo");

const createToDo = async(req,res,next)=>{
    try {
        const {task, category} = req.body;
        
        const todoExists = await ToDo.findOne({task});
        if(todoExists){
            return res.status(400).json({success: false, message:"Task already exists."});
        }
        
        // create new object
        const data = {
            task,
            category
        };
        await ToDo.create(data);
        res.status(201).json({success: true, message: "Task successfully added"});
    } catch (error) {
        next(error);
    }
};

const getAllToDo = async(req,res,next) => {
    try {
        const allToDo = await ToDo.find();
        res.status(200).json({success: true, message: allToDo});
    } catch (error) {
        next(error);
    }
};

const getToDoById = async(req,res,next) => {
    try {
        const {id} = req.params;
        const toDo = await ToDo.find({_id: id});
        if(!toDo){
            return res.status(404).json({success: false, message: "Task not found."})
        }
        res.status(200).json({success: true, message: toDo});
    } catch (error) {
        next(error);
    }
};

const editToDo = async(req,res,next)=>{
    try {
        const {task, category, isCompleted} = req.body;
        const {id} = req.params;
        const todoExists = await ToDo.findOne({_id: id});
        if(!todoExists){
            return res.status(404).json({success: false, message:"Task not found."});
        }
        
        // create updated object
        const data = {
            task,
            category,
            isCompleted
        };
        await ToDo.updateOne({_id:id},{$set:data});
        res.status(200).json({success: true, message: "Task successfully updated"});
    } catch (error) {
        next(error);
    }
};

const deleteTodo = async(req,res,next) => {
    try {
        const {id} = req.params;
        const toDoExists = await ToDo.find({_id: id});
        if(!toDoExists){
            return res.status(404).json({success: false, message: "Task not found."})
        }
        await ToDo.deleteOne({_id: id});
        res.status(200).json({success: true, message: "Task deleted"});
    } catch (error) {
        next(error);
    }
};

module.exports = {createToDo, getAllToDo, getToDoById, editToDo, deleteTodo};