const { Router } = require ("express");
const { getUsers, addUser, getOlderMen, deleteUser, editUser } = require("../controllers/usersControllers");

const router = Router();

router.get("/:email?", getUsers)
router.get("/filter/olderMan", getOlderMen)
router.post("/", addUser)
router.delete("/", deleteUser)
router.put("/", editUser)

module.exports = router