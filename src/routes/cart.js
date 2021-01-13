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
    let params = getCartIdItemIdQuantityByRequest(req);
    let cart = carts.get(params.cartId);

    cart.addItem(params.item, params.quantity);

    res.json({
        success:true
    });
});

router.delete("/cart/:cartId/item/:item/:quantity", (req, res) => {    
    let params = getCartIdItemIdQuantityByRequest(req);
    let cart = carts.get(params.cartId);

    cart.removeItem(params.item, params.quantity);

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

function getCartIdItemIdQuantityByRequest(req) {
    return {
        cartId: req.params.cartId,
        item: req.params.item,
        quantity: parseInt(req.params.quantity)
    };
}