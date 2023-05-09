const User = require("../models/User");
const customError = require("../utils/custom");

const getUsers = (req, res) => {
    //TRAEMOS LOS USUARIOS DE LA DB
    
    try {
        const {name, id} = req.body;
    if (!id || !name)   throw new customError ("No hay id o no hay nombre", 400)
    const product = {id, name}
    res.status(201).json({message: "se creo el producto ", product })
        
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
        res.status(error.code || 500).json({message:error.message})
    }
}

module.exports = {
    getUsers,
    addUser
}