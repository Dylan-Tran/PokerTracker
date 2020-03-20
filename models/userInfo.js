const mongoose = require('mongoose');
const crypto = require('crypto');

const userInfo = new mongoose.Schema({
    username: String,
    password: String
})

userInfo.pre("save", function(next){
 
    const hashTool = crypto.createHash('sha256');
    hashTool.update(this.password);
     
    this.password = hashTool.digest('encoding');
    
    next();
}, (err)=>{
    if(err){
        console.log(err);
    }
})

module.exports = mongoose.model("Player", userInfo);