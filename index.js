const express=require("express");
const app=express();

const connect=require("./configs/db")
const {login,register}=require("./controller/auth.contoller")
const userController=require("./controller/user.cont")
const commentController=require("./controller/comment.cont")
const Bookcontroller=require("./controller/book.controller")



app.use("/user",userController)
app.use("/register",register)
app.use("/login",login)
app.use("/comment",commentController)
app.use("books",Bookcontroller)



app.listen(5012,async()=>{
    try{
        await connect()
 console.log("listen port 5012")
    }catch(err){
        console.log(err.message)
    }
})