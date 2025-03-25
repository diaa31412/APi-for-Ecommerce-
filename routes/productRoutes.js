const router = require('express').Router()

const productController = require('../contollers/productControllers')

// router to handle all products
router.get('/', productController.getAllProducts)

// router to create product 
router.post('/', productController.createProduct)

// router to handle search product 
router.get('/:key' ,productController.searchProduct)

// router to handle search product by Id
router.get('/:id' ,productController.getProductId)


module.exports =router