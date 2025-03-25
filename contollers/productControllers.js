const Product = require('../models/productModel')

module.exports={
    //Create new product 
    createProduct: async(req,res) =>{

    const newProduct= new Product(req.body)
    try{
        await newProduct.save()
        res.status(200).json("create new product successfual")

    }catch(err){
        res.status(500).json("Failed to create new product")
    }
   } ,

   // Get All products
   getAllProducts: async (req,res) =>{
    try{
        const products = await Product.find().sort({createdAt: -1})
        res.status(200).json(products)
    }catch(err){
        res.status(500).json("Failed to get all products")
    }
      

   },

   // Get  product by Id
   getProductId: async (req,res) =>{
    const productId = req.params.id
    try{
        const product = await Product.findById(productId)
        if(product){
            res.status(200).json(product)
        }else{
            res.status(404).json("The it is not found")
        }
        res.status(200).json(product)
    }catch(err){
        res.status(500).json("Failed to get the product")
    }
      

   },

   // Serach product 

   searchProduct: async (req, res) =>{
     try {
        const reults = await Product.aggreate(
            [
                {
                    $search: {
                        index: 'shoes',
                        text :{
                            query :req.params.key,
                            path:   {
                                wildcard: "*"
                            }
                        }
                    }
                }
            ]
        )
        res.status(200).json(reults)
     } catch (error) {
        res.status(500).json("Failed to get the product")
     }
   }


}