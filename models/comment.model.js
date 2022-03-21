
const mongoose=require("mongoose");
const commentSchema=new mongoose.Schema({
   body:{type:String,reqired:true},
   userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
   bookId:{type:mongoose.Schema.Types.ObjectId,ref:"book"},
   
},
{
  versionKey: false,
  timestamps: true,
}
)
module.exports = mongoose.model("comment", commentSchema); 
