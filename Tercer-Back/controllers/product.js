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

const addProducts = (req,res) =>{
    const {name, id} = req.body;

    if (!id || !name) res.status(400).json({message: "Falta el nombre del id"}) //Mala peticion

    const product = {id, name}
    res.status(201).json({message: "se creo el producto ", product })
}



module.exports = {
    getProducts,
    addProducts
}