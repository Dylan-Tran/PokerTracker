const mongoose = require('mongoose');
const crypto = require('crypto');

const userInfo = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

userInfo.pre("save", (next)=>{
    const hashTool = crypto.createHash('sha256');
    hashTool.update(this.password);
     
    this.password = hashTool.digest('encoding');
    next();
})
