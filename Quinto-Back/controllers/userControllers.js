const User = require ("../model/Userss")

const getUsers = async (req, res) => {
        try {
                const users = await User.find();
                res.status(200).json(users);
        } catch (error) {
                res.status(error.code || 500).json({message: "i`m sorry, something is wrong"})
        
        }
} 


module.exports = {
        getUsers,
}