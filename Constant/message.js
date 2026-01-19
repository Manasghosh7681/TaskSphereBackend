const errorMsg = {
    USER_NOT_FOUND: 'User Not Found',
    INVALID_CREDENTIALS: 'Invalid Credential',
    LOGIN_FILLED: 'Email and Password required',
    LOGIN_SUCCESS:'Login Successfully',
    INVALID_REQ:'Invalid request',
}
const Response = (res, status, msg, data) => {
    res.status(status).json({
        success: true,
        message: msg,
        data: data
    })
}
const errorHandling = (err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const msg = err.errorMessage || `Internal server error`
    res.status(statusCode).json({
        success:false,
        message:msg
    })
}
module.exports = { errorMsg, Response, errorHandling }