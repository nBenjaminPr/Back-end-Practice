const express = require ("express");
const app = express();
require("dotenv").config()


const PORT = process.env.PORT

app.listen(4500, () => {console.log(("Server listening on port " + PORT));})