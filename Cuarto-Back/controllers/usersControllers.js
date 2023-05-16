const User = require("../models/User");
const customError = require("../utils/custom");

const getUsers = async (req, res) => {
    //TRAEMOS LOS USUARIOS DE LA DB


    //TRAR POR SU ID User.find(ID)
    try {
        if(req.params.email) {
            const user = await User.findByOne({email: req.params.email})
            res.status(200).json({user})
        }else{
            const users = await User.find()
            res.status(200).json({users})
        }

    //TRAER MUCHOS RESUTLADOS
        // const users = await User.find();
    //TRAE UN RESULTADO

    //TRAE SEGUN LA CONDICION User.find({})
    } catch (error) {
        res.status(error.code || 500).json({message:error.message})
    }

}

//Toda comunicion con la base de datos es ASYNC Y DONDE SE VA A DEMORAR AGREGAR UN AWAIT 

const addUser = async (req,res) => {
    try {
        const newUser = new User(req.body);
        const user = await newUser.save()
        if(!user) throw new customError("Fallo el guardado")

        res.status(201).json({message: "El usuario se creo correctamente", user})
    } catch (error) {
        res.status(error.code<600? error.code : 500).json({message:error.message})
    }
}

module.exports = {
    getUsers,
    addUser
}