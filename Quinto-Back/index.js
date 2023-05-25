const expres = require("express")
const dotenv = require("dotenv")
require("dotenv").config()
const app = expres();

const userRouts = require("./routes/userRoutes")

const PORT = process.env.PORT



app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)})