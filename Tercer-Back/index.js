const express = require ("express")
const app = express();

//req: Es el objeto que viene desde el front
//res: La respuesta que le damos al front

app.get("/users", (req, res)=>{
    res.status(200).json({users: []})
})

app.listen(4000, () => {
    console.log("Server listening...");
})
