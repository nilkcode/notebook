const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const User = require('../models/User');
const JWT_SECRET = "harrypotter@isgoodboy" 


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
     
     const salt = await bcrypt.genSaltSync(10)
    const  securePassword = await bcrypt.hashSync(req.body.password, salt)

     //Create a new User
     user  = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: securePassword,
      })

    const data = {
      user : {
        id:user.id,
      }
    }

     const authtoken = jwt.sign(data, JWT_SECRET);
     console.log(authtoken);
     //res.json({user})         // use for response of user
     res.json({authtoken});
    }
    // catching errors 
    catch(error){
      console.error(error.message);
      res.status(500).send("some error occured");
    }
      
   

   
})

module.exports = router