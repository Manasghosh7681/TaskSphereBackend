const jwt=require('jsonwebtoken')
const generateToken=(payload)=>{
    return jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:'15m'})
}
const generateRefreshToken=(payload)=>{
    return jwt.sign(payload,process.env.REFRESH_KEY,{expiresIn:'15d'})
}
module.exports={generateToken,generateRefreshToken}