const validateRequest = (type, req, res, next) =>{
    const {task, category, isCompleted} = req.body;

    const errors = [];

    // Validate the 'task' 
    if(!task) {
        errors.push("Task name is required.");
    } else if (task.length < 5) {
        errors.push("Task name must be atleast 5 characters long.");
    }

    // Validate the 'category'
    const validCategories = ["Work", "Personal","Home", "Urgent"];
    if(!category){
        errors.push("Category is required");
    } else if(!validCategories.includes(category)){
        errors.push(`Invalid Category.Use one of the following:${validCategories.join(", ")}.`);
    }

    // Validate the 'isCompleted'
    if(type==="edit" && isCompleted === undefined){
        errors.push("isCompleted is required");
    } else if(isCompleted !== undefined && typeof isCompleted !== "boolean"){
        errors.push("isCompleted must be a boolean");
    }

    if(errors.length > 0) {
        return res.status(400).json({success: false, message: errors});
    }

    // no validation errors
    next();
};

module.exports = validateRequest;