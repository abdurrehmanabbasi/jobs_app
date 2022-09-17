import errorHandler from "../utils/errorHandler.js"
export default (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500
    err.message = err.message || 'Internal Server Error'

    if(err.code===1062){
        const message = 'Error Dupicate conflict'
        err = new errorHandler(message,400)
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
}