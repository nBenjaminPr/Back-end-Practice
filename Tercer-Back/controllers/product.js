const getProducts = (req, res)=>{
    const products = ["papa0" , "huevo", "Aceite"]
    res.status(200).json({products})
}




module.exports = {
    getProducts,
}