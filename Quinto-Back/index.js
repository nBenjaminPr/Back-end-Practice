const expres = require("express")
const dotenv = require("dotenv")
require("dotenv").config()
const app = expres();



const PORT = process.env.PORT

app.listen(4000, () => {console.log("Server listening on PORT")})