const mongoose = require('mongoose')

const {Schema , model} = new mongoose

const productSchema = Schema({
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
                    type:Boolean , required: false , default: false
                }
            }
        ]
    } ,
    price:{type:String , required: true},
    description: {type: String , required: true}
},{timesstamps: true});

module.exports = model('Product',productSchema);