var express = require('express');
var routes = express.Router();
var path = require('path');

routes.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'../views/index.html'));
})

routes.get('/signIn',(req, res)=>{
    res.sendFile(path.join(__dirname,'../views/signIn.html'));
})
 
module.exports = routes;
