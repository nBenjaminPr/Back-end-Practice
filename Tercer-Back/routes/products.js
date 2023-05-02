const { Router } = require("express");
const { getProducts } = require("../controllers/product");
const router = Router();


router.get("/:id?",getProducts)



module.exports = router;