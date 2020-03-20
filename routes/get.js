var express = require('express');
var routes = express.Router();
var path = require('path');

routes.get('/',(req, res)=>{
    res.render('index');
})

routes.get('/signIn',(req, res)=>{
    res.render('signIn');
})
 
routes.get('/signUp',(req, res)=>{
    res.render('signUp');
})
module.exports = routes;
