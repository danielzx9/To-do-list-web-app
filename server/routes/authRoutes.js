const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");

//register user
router.post("/register", async (req, res) => {
    const { username, password} = req.body;
    try{
        const user = await User.create({username,password});
        await user.save();
        res.status(201).json({message: "User created successfully"});
    }catch(error){
        res.status(400).json({message: "User creation failed"});
    }
});

//login user
router.post("/login", async (req, res) => {
    const { username, password} = req.body;
    const user = await User.findOne ({username});
    if(!user || !(await user.comparePassword(password))){
        return res.status(401).json({message: "Invalid credentials"});
    }
    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: "1h"});
    res.json({token});
});

module.exports = router;
    
