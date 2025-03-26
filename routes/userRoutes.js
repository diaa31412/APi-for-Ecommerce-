const router = require('express').Router();

const userController = require('../contollers/userControllers')

const {verifyToken} = require('../middleware/verifyToken')


//router to get user by id
router.get('/', verifyToken,userController.getUser)

// router to delete user
router.delete('/',verifyToken, userController.deleteUser)

module.exports=router


