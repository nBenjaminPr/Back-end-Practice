// console.log("La suma de 2 mas 2 es " + (2+2));

const http = require("http")

const server = http.createServer((req, res) =>{
    res.write("hola mundo");
    res.statusCode=200;
    res.end();
})

server.listen(5000, () => {
    console.log("Servidor escuchando...");
})