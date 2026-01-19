const findUser = require('../Service/OauthService')
const { generateToken, generateRefreshToken } = require('../Constant/OauthJwt')
const { errorMsg } = require('../Constant/message')
const { Response } = require('../Constant/message')
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const result = await findUser(email, password)
        console.log(result,'User details')
        if (!result.success) {
            if (result.message == errorMsg.USER_NOT_FOUND) {
                res.status(404).json({
                    success: false,
                    message: errorMsg.USER_NOT_FOUND
                })
            }
            if (result.message == errorMsg.INVALID_CREDENTIALS) {
                res.status(401).json({
                    success: false,
                    message: errorMsg.INVALID_CREDENTIALS
                })
            }
        }
        const oauthToken = await generateToken({ email })
        const refresh = await generateRefreshToken({ email })
        const data = [
            {
                oauth: oauthToken,
                refresh: refresh
            }
        ]
        Response(res, 200, errorMsg.LOGIN_SUCCESS, data)
    } catch (err) {
        console.log(err.message)
        next(err)
    }
}
module.exports = { login }