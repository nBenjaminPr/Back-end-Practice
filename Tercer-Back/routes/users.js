const { Router } = require("express")
const router = Router();


router.get("/", (req, res)=>{
    res.status(200).json({message: "Todos los usuarios"})
})
router.put("/", (req, res)=>{
    res.status(200).json({message: "Se ha editado un user"})
})
router.delete("/", (req, res)=>{
    res.status(200).json({message: "Se ha borrado una users"})
})
router.post("/", (req, res)=>{
    res.status(200).json({message: "Se ha creado un usuarios"})
})

module.exports = router;