const express = require("express");
const Store = require("../models/store");
const { NotFoundError } = require("../utils/errors");
const router = express.Router();

//List all products. When /store is read, pull up list of products from Store class/module.
//Display products as a json object. If fails, returns error.
router.get("/", async (req, res, next) => {
    //res.status(200).json({pinger:"ponger"});
    try {
        const products = await Store.listProducts();
        res.status(200).json({ products });
    } catch (err) {
        next(err);
    }
});

module.exports = router;