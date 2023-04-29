const express = require("express")

const app = express();

app.get("/users", (req, res)=>{
    res.status(200).send("Usuarios")
})

app.get("/product", (req, res)=>{
    res.status(200).send("Productos")
})

app.get("/games", (req, res)=>{
    res.status(200).send("Juegos")
})

app.get("/bikes", (req, res)=>{
    res.status(200).send("Bicicletas")
})

app.listen(5000, () => {
    console.log("Server listening on port 5000");
})