class customError extends Error{
    constructor(message, code){
        super(message);
        this.code=code
}
}


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
    //! Primera manera de manejar errores
    // const {name, id} = req.body;
    // if (!id || !name) return res.status(400).json({message: "Falta el nombre del id"}) //Mala peticion
    // const product = {id, name}
    // res.status(201).json({message: "se creo el producto ", product })
    //! Segunda manera de manejar errores

        // try {
        //     const {name, id} = req.body;
        // if (!id || !name)   throw new Error ("No hay id o no hay nombre")
        // const product = {id, name}
        // res.status(201).json({message: "se creo el producto ", product })
            
        // } catch (error) {
        //     res.status(400).json({message:error.message})
        // }

    //! Tercera manera de manejar errores
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
    getProducts,
    addProducts
}