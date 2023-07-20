const mongoose=require('mongoose') 

const userSchema=new mongoose.Schema({
    pname:{
        type:String,
        required:true
    },
    pdes:{
        type:String,
        required:true
    },
    imgpath:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true,
        default:Date.now
    }
})

//create model

const users=new mongoose.model('users',userSchema)

module.exports=users;