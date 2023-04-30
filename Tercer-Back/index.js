const express = require ("express")
const usersRoutes = require ("./routes/users")
const app = express();

//req: Es el objeto que viene desde el front
//res: La respuesta que le damos al front
app.get("/*", (req, res)=>{
    res.status(404).json({message: "Error sin usuarios"})
})

app.use ("/users", usersRoutes)

app.get("/countries", (req, res)=>{
    res.status(200).json({message: "Todos los usuarios"})
})
app.put("/countries", (req, res)=>{
    res.status(200).json({message: "Se ha editado un user"})
})
app.delete("/countries", (req, res)=>{
    res.status(200).json({message: "Se ha borrado una users"})
})
app.post("/countries", (req, res)=>{
    res.status(200).json({message: "Se ha creado un usuarios"})
})

app.get("/phones", (req, res)=>{
    res.status(200).json({message: "Todos los usuarios"})
})
app.put("/phones", (req, res)=>{
    res.status(200).json({message: "Se ha editado un user"})
})
app.delete("/phones", (req, res)=>{
    res.status(200).json({message: "Se ha borrado una users"})
})
app.post("/phones", (req, res)=>{
    res.status(200).json({message: "Se ha creado un usuarios"})
})

app.get("/products", (req, res)=>{
    res.status(200).json({message: "Todos los usuarios"})
})
app.put("/products", (req, res)=>{
    res.status(200).json({message: "Se ha editado un user"})
})
app.delete("/products", (req, res)=>{
    res.status(200).json({message: "Se ha borrado una users"})
})
app.post("/products", (req, res)=>{
    res.status(200).json({message: "Se ha creado un usuarios"})
})



app.listen(4000, () => {
    console.log("Server listening on port 4000...");
})
