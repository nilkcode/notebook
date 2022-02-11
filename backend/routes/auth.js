const express = require('express')
const router = express.Router()
const User = require('../models/User');

// ...rest of the initial code omitted for simplicity.
const { body, validationResult } = require('express-validator');

// Create a user using :Post  "/api/auth/ " and does not requred Auth

router.post('/',[
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid passowrd').isLength({ min: 5 }),

    ] ,(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
     
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }).then(user => res.json(user))
      .catch(err => {console.log(err)
        res.json({error:'Please enter a unique value for email'})})

   
})

module.exports = router