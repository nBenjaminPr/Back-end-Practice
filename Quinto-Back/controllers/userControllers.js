const User = require ("../model/Userss");
const CustomError = require("../utils/customError");

const getUsers = async (req, res) => {
        try {
                const { gender, pageNumber } = req.query;
    const page = (pageNumber - 1) * 2;
                let users;
                let count;
        if (!gender) {
      // users = await User.find({ age: { $gte: 18 } });
                [users, count] = await Promise.all([
        User.find().skip(page).limit(2).populate("country"),
        User.countDocuments(),
        ]);
      // users = await User.find().skip(page).limit(2);
      // count = await User.countDocuments();
        } else {
                users = await User.find({ gender });
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