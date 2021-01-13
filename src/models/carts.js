"use strict";
const Cart = require("./cart")
const carts = {};

class Carts {

    new () {
        let cart = new Cart();

        carts[cart.id] = cart;

        return cart;
    }

    get (id) {
        return carts[id];
    }

}

module.exports = new Carts();