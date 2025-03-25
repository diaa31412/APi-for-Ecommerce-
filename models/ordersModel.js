const mongoose = require('mongoose')

const {Schema , model} = new mongoose

const ordersSchema = Schema({
    userId:{type:String,required:true},
    customerId:{type: String , required: true},
    productId:{
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity:{type:Number,required:true},
    subTotal:{type:Number,required:true},
    total:{type:Number,required:true},
    deliveryStatus:{type:String,required:true , default: "pending"},
    PaymentStatus:{type:String,required:true}
   
},{timesstamps: true});

module.exports = model('Orders',ordersSchema);