const mongoose = require('mongoose')

const {Schema , model} =  mongoose

const cartSchema = Schema({
    userId : {type: String ,reuired: true},
    products: [
        {
            cartItem:{
                type: mongoose.Schema.Types.ObjectId,
                ref :" Product",

            },
            quantity :{
                type: Number,
                default: 1

            }
        }
    ]
   
},{timestamps: true});

module.exports = model('Cart',cartSchema);