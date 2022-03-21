const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    firstname:{type:String,reqired:true},
    lastname:{type:String,reqired:true},
    age:{type:Number,reqired:true},
    email:[{type:String,reqired:true}],
    profileimg:{type:String,reqired:true},
},
{
  versionKey: false,
  timestamps: true,
}
)
module.exports = mongoose.model("user", userSchema); 
