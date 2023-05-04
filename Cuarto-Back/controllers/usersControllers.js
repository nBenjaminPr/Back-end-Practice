const getUsers = (req, res) => {
    //TRAEMOS LOS USUARIOS DE LA DB

    const users = ["diego", "Gaby"]
    res.status(200).json({users})
}


module.exports = {
    getUsers
}