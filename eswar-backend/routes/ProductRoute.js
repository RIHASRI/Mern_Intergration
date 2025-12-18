const express = require("express");

const { getProduct, postProduct } = require("../controller/productController.js"); 
const { deleteProduct } = require("../controller/productController.js");
const { updateProduct } = require("../controller/productController.js");
// MUST match file name exactly

const router = express.Router();

router.get("/sleepingproduct", getProduct);
router.post("/postProduct", postProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.put("/updateProduct/:id",updateProduct);
module.exports = router;
