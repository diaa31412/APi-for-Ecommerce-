const Product = require('../models/productModel')
const Cart = require('../models/cartModel')


module.exports ={
    addCart: async (req, res)=>{
        const userId = req.user.id;
        const {cartItem , quantity} = req.body;


        try {
            // check if this cart exist or no 
            const cart = await Cart.findOne({userId})

            if(cart){
                const existingProduct = cart.products.find(
                    (product) =>product.cartItem.toSting() == cartItem
                );
                // if exisiting we need to increamant quantity
                if(existingProduct){
                    existingProduct.quantity +=1;
                }else{
                    cart.products.push({cartItem , quantity: 1})
                }
                await cart.save();
                res.status(200).json("Product added to cart")
            } else{
                const newCart = new Cart({
                    userId,
                    products:[{cartItem , quantity: 1}]
                })
                await newCart.save();
                res.status(200).json("Product added to cart")
            }
        } catch (error) {
            res.status(500).json(error)
        }
    },

    getCard:async (req,res)=>{
        const userId = req.user.id;
        try {
            const cart = await Cart.find({userId});
            res.status(200).json(cart)
        } catch (error) {
            res.status(500).json(error) 
        }
    },

    deleteCartItem: async(req,res) =>{
        const cartItemId =req.params.cartItem;


        try {
            const updatedCart = await Cart.findOneAndUpdate(
                {'products._id': cartItemId},
                {$pull:{products: {_id: cartItemId}}},
                {new:true}
            );
            if(!updatedCart){
                return res.status(404).json({message: "cart item not found"})
            }

            return res.status(200).json(updatedCart)
        } catch (error) {
            return res.status(500).json(error) 
        }
    }
}