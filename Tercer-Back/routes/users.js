const { Router } = require("express");
const { getUsers, getUsersArgentina, editUsers, addUsers, deleteUsers } = require("../controllers/users");
const verifyRole = require("../middlewares/verifyRole");
const router = Router();


router.get("/", getUsers)

router.get("/argentina",getUsersArgentina)

router.put("/", verifyRole, editUsers)

router.delete("/",deleteUsers)

router.post("/",verifyRole,addUsers)

module.exports = router;