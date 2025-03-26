const router = require('express').Router();

const cartController = require('../contollers/cartControllers')

const {verifyToken} = require('../middleware/verifyToken')


//router to get cart to user by id
router.get('/find/', verifyToken,cartController.getCard)

//Router to add cart to user 
router.post('/',verifyToken, cartController.addCart)

//Router to update cart
router.delete('/:cartItem',verifyToken, cartController.deleteCartItem)



module.exports=router


