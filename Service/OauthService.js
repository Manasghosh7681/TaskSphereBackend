const User = require('../Models/OauthModel')
const bcrypt=require('bcryptjs')
const { errorMsg } = require('../Constant/message')
const findUser = async (email, password) => {
    try {
        const user = await User.findOne({ email })
        console.log('email', email, user)
        if (!user) {
            return { success: false, message: errorMsg.USER_NOT_FOUND }
        }
        const isValid=await bcrypt.compare(password,user.password)
        if (!isValid) {
            return { success: false, message: errorMsg.INVALID_CREDENTIALS }
        }
        return { success: true, user }
    } catch (err) {
        console.log(err.message)
    }
}
module.exports = findUser