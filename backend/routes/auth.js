const express = require('express')
const router = express.Router()
const User = require('../models/User');

// ...rest of the initial code omitted for simplicity.
const { body, validationResult } = require('express-validator');

// Create a user using :Post "/api/auth/createuser" and does not requred Auth / No login required

router.post('/createuser',[
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid passowrd').isLength({ min: 5 }),

    ] ,async(req, res) => {
 
    // If there are errors , return Bad request and the errors

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // check whether the user with this email exists already
    try {
     let user = await User.findOne({email:req.body.email});
    
     if (user){
       
        return res.status(400).json({error:"Sorry a user with this email already exists"})

     } 
     user  = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      })
     res.json({user})
    }
    catch(error){
      console.error(error.message)
    }
      
   

   
})

module.exports = router