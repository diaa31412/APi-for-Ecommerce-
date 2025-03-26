const mongoose = require('mongoose')

const { Schema, model } = mongoose;

const productSchema = new Schema({
    name: {type: String ,required: true},
    title: {type: String ,required: true},
    category: {type: String ,required: true},
    imageUrl:{type:[String],required: true} ,
    oldPrice: {type: String ,required: true},
    sizes:{
        type:[
            {
                size:{
                    type:String , required :true
                },
                isSelected: {
                    type:Boolean ,  default: false
                }
            }
        ]
    } ,
    price:{type:String , required: true},
    description: {type: String , required: true}
},{timestamps: true});

module.exports = model('Product',productSchema);