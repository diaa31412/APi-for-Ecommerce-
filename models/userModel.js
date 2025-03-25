const mongoose = require('mongoose')

const {Schema , model} = new mongoose

const userSchema = Schema({
    userName:{type:String , required:true},
    email:{type:String , required:true , unique:true},
    password:{type:String , required:true},
    location:{type:String , default:" Syria"}
   
},{timesstamps: true});

module.exports = model('User',userSchema);