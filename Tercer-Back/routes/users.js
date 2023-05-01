const { Router } = require("express");
const { getUsers, getUsersCountry, editUsers, addUsers, deleteUsers } = require("../controllers/users");
const verifyRole = require("../middlewares/verifyRole");
const router = Router();


router.get("/", getUsers)

router.get("/:pais",getUsersCountry)

router.put("/", verifyRole, editUsers)

router.delete("/",deleteUsers)

router.post("/",verifyRole,addUsers)

module.exports = router;


// POST , PUT , DELETE 
// BODY

// GET 

// 1 solo params