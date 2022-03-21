const express=require("express")
const router=express.Router();

const Book=require("../models/book.module")

router.post("/register",async (req, res) => {
    
    try {
        const users = await Book.create(req.body);
        return res.send(users);
    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
});
   
module.exports=router;