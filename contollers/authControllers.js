const User = require('../models/userModel')

const CryptoJs = require('crypto-js')
const jwt = require('jsonwebtoken')

module.exports={
    createUser: async(req, res)=>{
        const newUser =new User({
            userName:req.body.userName,
            email:req.body.email,
            password:CryptoJs.AES.encrypt(req.body.password ,process.env.SECRET).toString(),
            location:req.body.location
        });
          
        try {
            await newUser.save()
            res.status(201).json({message: "User Successful created"})
            
        } catch (error) {
            res.status(500).json({message: error})
        }
    } ,
    loginUser: async (req,res) =>{
        try {
            const user = await User.findOne({email: req.body.email})
            if(!user){
                res.status(401).json("Could not found the user")
            }

            const decryptedPassword = CryptoJs.AES.decrypt(user.password , process.env.SECRET)
            const thePassword = decryptedPassword.toString(CryptoJs.enc.Utf8)
            if(thePassword !== req.body.password){
                res.status(401).json("Maybe You have a problem with email or password")
            }

            const userToken =jwt.sign({
                id: user._id
            },process.env.JWT_SECRET,{expiresIn: "21d"})

            const {password,_v ,createdAt, ...others} = user._doc

            res.status(201).json({...others ,token: userToken})
        } catch (error) {
            res.status(501).json("Failed to login Check your credential")
        }
    }
}