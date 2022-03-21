const mongoose=require("mongoose");
const publicSchema=new mongoose.Schema({
   name:{type:String,reqired:true},
    
   
},
{
  versionKey: false,
  timestamps: true,
}
)
module.exports = mongoose.model("public", publicSchema); 
