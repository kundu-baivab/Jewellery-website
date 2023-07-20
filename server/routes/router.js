const express=require('express');
const router=new express.Router();
const multer=require('multer')
const users=require('../model/userSchema');
const moment=require('moment')

//img storage path

const imgconfig=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads")
    },
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}. ${file.originalname}`)
    }
})


//img filter

const isImage=(req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }else{
        callback(new Error('only image is allowed'))
    }
}

const upload=multer({
    storage:imgconfig,
    fileFilter:isImage
})

//product register

router.post('/register',upload.single("photo"),async(req,res)=>{
    const {filename}=req.file;
    const {pname,pdes}=req.body

    if(!pname || !pdes || !filename){
        res.status(401).json({status:401,message:"Fill all the data fields"})
    }

    try{
        const date=moment(new Date()).format('YYYY-MM-DD');
        const userData=new users({
            pname:pname,
            pdes:pdes,
            imgpath:filename,
            date:date
        })
        const finalData=await userData.save() 
        res.status(201).json({status:201,finalData})
    }catch(error){
        res.status(401).json({status:401,error})
    }
})

//product data get

router.get("/getdata",async(req,res)=>{
    try {
        const getUser=await users.find().sort({date: -1});
        res.status(201).json({status:201,getUser})
    } catch (error) {
        res.status(401).json({status:401,error})
    }
})

router.get("/gallery/:id", async (req, res) => {
  try {
    const {id}=req.params;
    const product = await users.findById({_id:id});
    res.status(201).json({status:201,product})
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
});

//delete user data

router.delete("/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const dltUser=await users.findByIdAndDelete({_id:id});
        res.status(201).json({status:201,dltUser})
    } catch (error) {
        res.status(401).json({status:401,error})
    }
})


module.exports=router;