const { Router } = require("express");
const { getProducts, addProducts } = require("../controllers/product");
const router = Router();


router.get("/:id?",getProducts)

router.post("/", addProducts)



module.exports = router;