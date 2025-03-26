const router = require('express').Router();

const authController = require('../contollers/authControllers')


//router to create user
router.post('/register', authController.createUser)

// router to login user
router.post('/login', authController.loginUser)

module.exports=router


