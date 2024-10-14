// middleware to handle errors during the req-res cycle
const handleErrors = (error, req, res, next) => {
    console.error("Error:", error);
    res.status(500).json({
        message: "Unable to process request.Try Again Later",
        success: false
    });
};

module.exports = handleErrors;