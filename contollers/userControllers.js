const User = require("../models/userModel");

module.exports = {
    getUser: async(req,res) =>{
        try {
            const user = await User.findById(req.user.id)

            const {password,_v ,createdAt, ...userData} = user._doc
            res.status(200).json(userData)
            
        } catch (error) {
            res.status(500).json(error)
        }
    } ,
    deleteUser : async(req,res) =>{
        try {
            const user = await User.findById(req.user.id)
            res.status(200).json("User Successfual Deleted")
        } catch (error) {
            res.status(500).json(error)
        }

    }
}