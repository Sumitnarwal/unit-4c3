const User=require("../models/user.module")

const register= async (req,res)=>{
    try{
    
    let user=await User.findOne({email:req.body.email}).lean().exec();
    
    if(user){
        return res.send({message:"please try another email"})
    }
    user=await User.create(req.body); 
    
    
    return res.send({user})
     
    }catch(err){
        console.log(err.message)
    }
    }
    const login= async(req,res)=>{
        try{
     const user=await User.findOne({email:req.body.email})
     if(!user){
        return res.send({message:"please try another email"})
    }
  
    
    return res.send({user})
     
        }catch(err){
            console.log(err.message)
        }
    }
    module.exports={login,register}