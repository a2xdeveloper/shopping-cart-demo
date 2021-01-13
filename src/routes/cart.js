"use strict";
const express = require("express");
const uuid = require("uuidv4");
const router = express.Router();

router.post("/cart", (req, res) => {
    res.json({
        success:true,
        id: uuid.uuid()
    });
});

router.put("/cart/:cartId/item/:item/:quantity", (req, res) => {    
    res.json({
        success:true
    });
});

module.exports = router;