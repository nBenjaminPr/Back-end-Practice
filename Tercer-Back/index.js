const express = require ("express") //para crear el servidor
const usersRoutes = require ("./routes/users")
const countriesRoutes = require ("./routes/countries")
const phonesRoutes = require ("./routes/phones")
const productsRoutes = require ("./routes/products")
const cors = require("cors")
const app = express();
const morgan = require ("morgan") //test son las peticiones que pedimos
require ("dotenv").config()

app.use(express.json())
app.use(morgan("dev"))
app.use(cors()) //compartir recursos entre dominios de origen distintos

//req: Es el objeto que viene desde el front
//res: La respuesta que le damos al front

app.use ("/users", usersRoutes)

app.use ("/countries", countriesRoutes)

app.use ("/phones", phonesRoutes)

app.use ("/products", productsRoutes)

app.get("*", (req, res)=>{
res.status(404).json({message: "Error sin usuarios"})
})


const PORT = process.env.PORT;

app.listen(4000, () => {
    console.log( `Server listening on port ${PORT}... `);
})
