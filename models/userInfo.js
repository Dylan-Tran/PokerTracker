const mongoose = require('mongoose');
const crypto = require('crypto');

const userInfo = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

userInfo.pre("save", (next)=>{
    const info = this;


    next();
})
