"use strict";
const express = require("express");
const carts = require("../models/carts");
const router = express.Router();

router.post("/cart", (req, res) => {
    let cart = carts.new();

    res.json({
        success:true,
        id: cart.id
    });
});

router.put("/cart/:cartId/item/:item/:quantity", (req, res) => {    
    let cartId = req.params.cartId;
    let item = req.params.item;
    let quantity = req.params.quantity;
    let cart = carts.get(cartId);

    cart.addItem(item, quantity);

    res.json({
        success:true
    });
});

router.get("/cart/:cartId", (req, res) => {    
    let cartId = req.params.cartId;
    let cart = carts.get(cartId);

    res.json({
        success:true,
        items: cart.getItems()
    });
});

module.exports = router;