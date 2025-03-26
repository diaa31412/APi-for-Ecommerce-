const mongoose = require('mongoose')

const { Schema, model } = mongoose;

const userSchema = new Schema({
    userName:{type:String , required:true},
    email:{type:String , required:true , unique:true},
    password:{type:String , required:true},
    location:{type:String , default:" Syria"}
   
},{timestamps: true});

module.exports = model('User',userSchema);