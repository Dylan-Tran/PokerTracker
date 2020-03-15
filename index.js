const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//database connection
const databaseConnectionString = require(__dirname + '/config/databaseInfo.js');
mongoose.connect(databaseConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}); 
//database can be access using mongoose.connection

var app = express();

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//static folder
app.use(express.static(path.join(__dirname, '/public')));

//routes folder
var get = require('./routes/get'); 
app.use(get);

var post = require('./routes/post');
app.use(post);

app.listen(5500, ()=>{
    console.log("Server is on port 5500");
})