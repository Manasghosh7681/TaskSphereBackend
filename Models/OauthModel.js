const mongo=require('mongoose')
const userSchema=new mongo.Schema(
    {
        email:{type:String,required:true},
        password:{type:String,required:true}
    },
    {
        timestamps:true
    }
)
module.exports=mongo.model('User',userSchema)