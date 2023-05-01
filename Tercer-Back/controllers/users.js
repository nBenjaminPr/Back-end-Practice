const getUsers = (req, res)=>{
    res.status(200).json({message: "Todos los usuarios"})
}

const getUsersCountry = (req, res)=>{
    console.log(req.body); //!FALSO LAS PETICIONES DE TIPO GET NO TIENEN BODY

    const country = req.params.pais //1ª primera manera de mandar desde el front al backend
    // const state = req.query.state 2ª primera
    const {state, gobernatu,zonaTime} = req.query //3ª primera
    res.status(200).json({message: `Todos los usuarios de ${country} del estado de ${state}, el gobernador es ${gobernatu} y la hora es ${zonaTime} `})
}

const editUsers = (req, res)=>{
    res.status(200).json({message: "Se ha editado un user"})
}

const deleteUsers = (req, res)=>{
    res.status(200).json({message: "Se ha borrado una users"})
}

const addUsers = (req, res)=>{
    const info = req.body
    res.status(200).json({message: "Se ha creado un usuarios", info})
}


module.exports = {
    getUsers,
    editUsers,
    deleteUsers,
    addUsers,
    getUsersCountry
}