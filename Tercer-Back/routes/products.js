const { Router } = require("express")
const router = Router();


router.get("/router", (req, res)=>{
    res.status(200).json({message: "Todos los productos"})
})
router.put("/router", (req, res)=>{
    res.status(200).json({message: "Se ha editado un productos"})
})
router.delete("/router", (req, res)=>{
    res.status(200).json({message: "Se ha borrado una productos"})
})
router.post("/router", (req, res)=>{
    res.status(200).json({message: "Se ha creado un productos"})
})

module.exports = router;