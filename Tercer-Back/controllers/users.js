const getUsers = (req, res)=>{
    res.status(200).json({message: "Todos los usuarios"})
}

const getUsersArgentina = (req, res)=>{
    res.status(200).json({message: "Todos los usuarios de argentina"})
}

const editUsers = (req, res)=>{
    res.status(200).json({message: "Se ha editado un user"})
}

const deleteUsers = (req, res)=>{
    res.status(200).json({message: "Se ha borrado una users"})
}

const addUsers = (req, res)=>{
    res.status(200).json({message: "Se ha creado un usuarios"})
}


module.exports = {
    getUsers,
    editUsers,
    deleteUsers,
    addUsers,
    getUsersArgentina
}