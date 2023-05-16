const User = require("../models/User");
const customError = require("../utils/custom");

const getUsers = async (req, res) => {
    //TRAEMOS LOS USUARIOS DE LA DB


    //TRAR POR SU ID User.find(ID)
    try {
        const {gender,plus18} = req.query
        if(req.params.email) {
            const user = await User.findByOne({email: req.params.email})
            res.status(200).json({user})
        }else{ //Filtrando segun un CAMPO
            let users
            if(gender){
                users = await User.findOne({gender: gender})
            }else if(plus18){
                users = await User.find({age: {$gte:18}})
                //gte mayor que o igual que
                //lte menor que o igual que
                //gt Mayor que
                //lt Menor que
                //equal
            }else{
                users = await User.find()
            }
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

const getOlderMen = async(req,res) => {
    try {
        const olderMan = await User.find({$and: [{gender: "M"}, {age: {$gte: 18}}]})
        res.status(200).json({olderMan})
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
    addUser,
    getOlderMen
}