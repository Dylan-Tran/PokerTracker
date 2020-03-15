const express = require('express');
const routes = express.Router();
const cypto = require('crypto'); 

const userInfoSchema = require('../models/userInfo');

routes.post('/loginIn', async (req, res)=>{
    
    
    let query = {username: req.body.username};



    await userInfo.findOne(query, ())

})

module.exports = routes;

