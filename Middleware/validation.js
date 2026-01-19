const { errorMsg } = require('../Constant/message')
const requireField = (req, res, next) => {
    if (!req) {
        res.status(400).json({
            success: false,
            message: errorMsg.INVALID_REQ
        })
    }

    if (!req.body.email || !req.body.password) {
        res.status(400).json({
            success: false,
            message: errorMsg.LOGIN_FILLED
        })
    }
    next()
}
module.exports = { requireField }