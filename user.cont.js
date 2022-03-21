const express=require("express")
const router=express.Router();
const { body, validationResult } = require("express-validator");

const User=require("../models/user.module")

router.post("",
body("firstname").not().isEmpty().isLength({min:3,max:30}),
body("lastname").not().isEmpty().isLength({min:3,max:30}),
body("age").isNumeric({min:1,max:150}),
body('email').isEmail()
.custom( async value => {
   const user=await User.findOne({email:value}) 
      if (user) {
        throw new Error('E-mail already in use');
      }
      return true;
    }),
async (req, res) => {
    
    try {
        const users = await User.create(req.body);
        return res.send(users);
    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
});
   
module.exports=router;