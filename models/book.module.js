const mongoose=require("mongoose");
const bookSchema=new mongoose.Schema({
    likes:{type:Number,reqired:ture,default:0},
    coverimage:{type:String,reqired:true},
    content:{type:string,reqired:true},
    publId:{type:mongoose.Schema.Types.ObjectId,ref:"public",required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    
    
   
},
{
  versionKey: false,
  timestamps: true,
}
)
module.exports = mongoose.model("book", bookSchema); 
