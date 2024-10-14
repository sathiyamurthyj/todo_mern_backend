const express = require("express");
const{createToDo, getAllToDo, getToDoById, editToDo, deleteTodo} = require("../controllers/ToDoController");
const validateRequest = require("../middlewares/RequestValidator");

const router = express.Router();

const createValidationMiddleware = (type) => (req,res,next)=> validateRequest(type, req, res, next);

// routes
router.post("/new", createValidationMiddleware("create"), createToDo);
router.get("/all", getAllToDo);
router.get("/:id", getToDoById);
router.put("/:id", createValidationMiddleware("edit"), editToDo);
router.delete("/:id", deleteTodo);

module.exports = router;
