const User = require ("../model/Userss");
const CustomError = require("../utils/customError");

const getUsers = async (req, res) => {
        try {
                const {gender} = req.query
                let users;
                if(!gender){
                        users = await User.find()
                }else{
                        users = await User.find({gender})
                }
                // throw new CustomError ("this is a text", 502)
                res.status(200).json(users);
        } catch (error) {
                res.status(error.code || 500).json({message: "i`m sorry, something is wrong"})
        
        }
} 


module.exports = {
        getUsers,
}