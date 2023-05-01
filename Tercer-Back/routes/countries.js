const { Router } = require("express")
const router = Router();


router.get("/", (req, res)=>{
    res.status(200).json({message: "Todos los pais"})
})
router.put("/", (req, res)=>{
    res.status(200).json({message: "Se ha editado un pais"})
})
router.delete("/", (req, res)=>{
    res.status(200).json({message: "Se ha borrado una pais"})
})
router.post("/", (req, res)=>{
    res.status(200).json({message: "Se ha creado un pais"})
})

module.exports = router;