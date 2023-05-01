const verifyRole = (req,res,next) =>{
    const admin = false;
    // 403: son errores
    if(admin){
        next();
    }else{
        res.status(403).json({
            message: "Usted no tiene acceso"
        })
    }
}


module.exports = verifyRole