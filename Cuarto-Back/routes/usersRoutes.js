const { Router } = require ("express");
const { getUsers, addUser, getOlderMen } = require("../controllers/usersControllers");

const router = Router();

router.get("/:email?", getUsers)
router.get("/olderMan", getOlderMen)
router.post("/", addUser)

module.exports = router