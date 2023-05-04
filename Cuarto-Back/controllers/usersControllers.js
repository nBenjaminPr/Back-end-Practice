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


module.exports = {
    getUsers
}