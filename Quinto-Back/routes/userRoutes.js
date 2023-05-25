const {Router} = require ("express")
const router = Router()
const userControllers = require ("../controllers/userControllers")


router.get("/", userControllers)

module.exports = router