const express = require ("express")
const app = express();

app.get("/product", (req, res)=>{
    res.status(200).send("Productos")
})

app.get("/games", (req, res)=>{
    res.status(200).send("Juegos")
})

app.get("/bikes", (req, res)=>{
    res.status(200).send("Bicicletas")
})

app.listen(4000, () => {
    console.log("Server listening...");
})
