const express=require('express')
const router=express.Router()
const {requireField}=require('../Middleware/validation')
const {login}=require('../Controller/OauthController')
router.post('/login',requireField,login)
module.exports=router