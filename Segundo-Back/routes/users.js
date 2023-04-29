const {Router} = require ("express")
const router = Router();

router.post("/u", (req, res)=>{
    res.status(200).send("Usuarios")
})

router.get("/g", (req, res)=>{
    res.status(200).send("Usuarios")
})

router.put("/p", (req, res)=>{
    res.status(200).send("Usuarios")
})

router.delete("/d", (req, res)=>{
    res.status(200).send("Usuarios")
})