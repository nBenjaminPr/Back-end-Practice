const express = require ("express");
const app = express();
require("dotenv").config()
const usersRoutes = require("./routes/usersRoutes")

const PORT = process.env.PORT


app.use("/users", usersRoutes) 

app.listen(4500, () => {console.log(("Server listening on port " + PORT));})


//!Usando base de datos en Mongo DB"