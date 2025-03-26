const router = require('express').Router();

const orderController = require('../contollers/ordersControllers')

const {verifyToken} = require('../middleware/verifyToken')


//router to get orders to user by id
router.get('/', verifyToken,orderController.getUserOrders)


module.exports=router


