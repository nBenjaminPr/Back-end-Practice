const { Router } = require("express");
const { getUsers, getUsersArgentina, editUsers, addUsers, deleteUsers } = require("../controllers/users");
const router = Router();


router.get("/", getUsers)

router.get("/argentina",getUsersArgentina)

router.put("/",editUsers)

router.delete("/",deleteUsers)

router.post("/",addUsers)

module.exports = router;