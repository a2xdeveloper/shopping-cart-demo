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
    updateCart(req, res, true);
});

router.delete("/cart/:cartId/item/:item/:quantity", (req, res) => {    
    updateCart(req, res, false);
});

router.get("/cart/:cartId", (req, res) => {    
    let cartId = req.params.cartId;
    let cart = getCart(res, cartId)

    if (cart) {
        res.json({
            success:true,
            items: cart.getItems()
        });
    }
});

module.exports = router;

function getCartIdItemIdQuantityByRequest(req) {
    return {
        cartId: req.params.cartId,
        item: req.params.item,
        quantity: parseInt(req.params.quantity)
    };
}

function updateCart(req, res, add) {
    let params = getCartIdItemIdQuantityByRequest(req);
    let cart = getCart(res, params.cartId)

    if (cart) {
        if (add) {
            cart.addItem(params.item, params.quantity);
        } else {
            cart.removeItem(params.item, params.quantity);
        }
    
        res.json({
            success:true
        });    
    }
}

function getCart(res, cartId) {
    let cart = carts.get(cartId);

    if (!cart) {
        res.status(404).json({
            success:false
        });
    }

    return cart;
}