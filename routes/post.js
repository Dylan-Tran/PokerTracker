const express = require('express');
const routes = express.Router();
const crypto = require('crypto'); 

const userInfoSchema = require('../models/userInfo');

routes.post('/createAccount', async (req, res)=>{
    
    let enterInformation = {
        username: req.body.username,
        password: req.body.password
    }

    let newUser = new userInfoSchema(enterInformation);

    newUser.save((err)=>{
        if(err){
            console.log(err);
        }
    })
    /*try{
        await newUser.save((error)=>{
            console.log(error)
       })
       res.render('signIn');
    }catch(err){
        console.log(err);
        console.log("Couldn't create account");
    }
    */
})

routes.post('/loginIn', async (req, res)=>{
    
    let query = {username: req.body.username};
    let enteredPassword = req.body.password;
    
    var login = await userInfo.findOne(query, 'password');
    if(login == null){
        res.render('signIn',{
            message: "Wrong username"
        })
    }

    const hashTool = crypto.createHash('sha256');
    hashTool.update(enteredPassword);
    let loginPassword = hashTool.digest('encoding');
    
    console.log(loginPassword);
    console.log(login);
    
    
    if(loginPassword == login){
        res.render('table');
    }else{
        res.render('login',{
           message: "Wrong password"
        });
    }
})

routes.post('write', (req,res)=>{
    let
})

module.exports = routes;

