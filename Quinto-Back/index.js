const expres = require("express")
const connectDB = require("./config/db");
const app = expres();
require("dotenv").config()

const userRouts = require("./routes/userRoutes");

connectDB();

const PORT = process.env.PORT

app.use("/users", userRouts)

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)})