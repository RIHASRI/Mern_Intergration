const express = require("express");

const { getProduct, postProduct } = require("../controller/ProductController.JS"); 
const { deleteProduct } = require("../controller/ProductController.JS");
const { updateProduct } = require("../controller/ProductController.JS");
// MUST match file name exactly

const router = express.Router();

router.get("/sleepingproduct", getProduct);
router.post("/postProduct", postProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.put("/updateProduct/:id",updateProduct);
module.exports = router;
