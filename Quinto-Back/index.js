const expres = require("express")
const dotenv = require("dotenv")
dotenv.config()
const app = expres();

const connectDB = require("./config/db");

const userRouts = require("./routes/userRoutes");

connectDB();

const PORT = process.env.PORT

app.use("/users", userRouts)

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)})