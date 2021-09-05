const express = require('express');
const router = express.Router();
const passport = require('passport');
require('./googleAuth')(passport);

router.get("/" , (req , res)=>{
    res.render('index');
});

router.get("/profile" , (req , res)=>{
    res.render("profile");
})

router.get("/google" , passport.authenticate('google' , { scope : ['profile' , 'email'] }));

router.get("/google/callback" , passport.authenticate('google' , {failureRedirect : "/"}) , (req , res)=>{
    console.log("hello world");
    res.redirect("/profile");
});

module.exports = router;