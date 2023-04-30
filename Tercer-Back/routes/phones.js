const { Router } = require("express")
const router = Router();


router.get("/", (req, res)=>{
    res.status(200).json({message: "Todos los celulares"})
})
router.put("/", (req, res)=>{
    res.status(200).json({message: "Se ha editado un celulares"})
})
router.delete("/", (req, res)=>{
    res.status(200).json({message: "Se ha borrado una celulares"})
})
router.post("/", (req, res)=>{
    res.status(200).json({message: "Se ha creado un celulares"})
})

module.exports = router;