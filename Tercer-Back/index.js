const express = require ("express")
const app = express();

//req: Es el objeto que viene desde el front
//res: La respuesta que le damos al front

app.get("/users", (req, res)=>{
    res.status(200).json({message: "Todos los usuarios"})
})

app.post("/users", (req, res)=>{
    res.status(200).json({message: "Se ha creado un usuarios"})
})

app.listen(4000, () => {
    console.log("Server listening on port 4000...");
})
