const getProducts = (req, res)=>{
const {id} = req.params;
const products = [{id: 1, name:"papa"} , {id: 2, name: "huevo"}, {id: 3, name:"Aceite}"}]
    
    
    if(!id){
        return res.status(200).json({products})
    }else{
        const product = products.find(p => p.id == id);
        res.status(200).json({product})
    }
}





module.exports = {
    getProducts,
}