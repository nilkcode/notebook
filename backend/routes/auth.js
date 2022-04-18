const express = require('express')
const User = require('../models/User');
const router = express.Router()
// ...rest of the initial code omitted for simplicity.
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser')


const JWT_SECRET = "harrypotter@isgoodboy" 




// Route::1   // Create a user using :Post "/api/auth/createuser" and does not requred Auth / No login required

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

     //res.json({user})         // use for response of user
     res.json({authtoken});
    }
    // catching errors 
    catch(error){
      console.error(error.message);
      res.status(500).send("some error occured");
    }
      
})

// Route::2  //-----  Authenticat  a user using: POST "api/auth/login"  No login required -----//

router.post('/login',[
  
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'password can not be blank').exists(),

  ] ,async(req, res) => { 
   
     // If there are errors , return Bad request and the errors

     const errors = validationResult(req);
     if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
     }

     const{email,password} = req.body;
     try{

      let user =  await User.findOne({email});
      if(!user) {
        return res.status(400).json({error:"Please try to login with correct credentials"});
      }

      const passowordCompare = await bcrypt.compare(password,user.password);
      if(!passowordCompare){
        return res.status(400).json({error:"Please try to login with correct credentials"});

      }

      const data = {
        user : {
          id:user.id,
        }
      }
  
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({authtoken});


     } catch(error){
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }

  })


// Route::3  //-----  Get login User Details  a user using: POST "api/auth/getuser"  login required -----//
router.post('/getuser' ,fetchuser, async(req, res) => { 
    try {
      userId = req.user.id
      const user = await User.findById(userId).select("-password")
      res.send(user)

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }

  })


module.exports = router