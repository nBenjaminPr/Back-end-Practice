const {Router} = require ("express")
const router = Router()
const {getUsers} = require ("../controllers/userControllers")


router.get("/", getUsers)

module.exports = router