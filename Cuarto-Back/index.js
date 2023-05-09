const express = require ("express");
const connectDB = require("./db/db");
const app = express();
require("dotenv").config()
const usersRoutes = require("./routes/usersRoutes");

connectDB();
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/users", usersRoutes) 

app.listen(4500, () => {console.log(("Server listening on port " + PORT));})


//!Usando base de datos en Mongo DB"