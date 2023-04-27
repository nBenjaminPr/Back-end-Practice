// console.log("La suma de 2 mas 2 es " + (2+2));

// const http = require("http")
const express = require("express")
const app = express();

app.get("/users",(req, res) => {
    res.status(200).json({users: [{
        name:"Nico"}, {name: "Loco"}, {name: "kales"}]})
})

app.get("/*",(req, res) => {
    res.status(404).json({message: "hola error 404"})
})

app.listen(8000, ()=> {
    console.log("escuchando puerto 8000...");
})

// const server = http.createServer((req, res) =>{
//     switch (req.url) {
//         case "/":
//             res.setHeader("Content-Type", "text/html")
//             res.write("hola mundo");
//             res.statusCode=200;
//             res.end();
//             break;
//         case "/404":    
//         res.statusCode=404;
//         res.setHeader("Content-Type", "text/html")
//         res.write("Error vieja");
//         res.end();
//         break;
    
//         default:
//             break;
//         }
// })

// server.listen(5000, () => {
//     console.log("Servidor escuchando...");
// })


// PETICIONES HTTP 
// METHID: GET
// HEADERS:
// BODY:

// RESPUESTA HTTP

// STATUSCODE
// 100 INFORMACION
// 200 TODO OK
// 300 REDIRECCIONES
// 400 ERRORES EN EL CLEINTE
// 500 ERRORES EN EL SERVIDOR
// MESSAGE JSON HTML TXT