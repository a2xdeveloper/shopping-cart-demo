"use strict";
const { validate } = require('uuid');
const carts = require("./carts");


it("Get a new cart", () => {
    let cart = carts.new();

    expect(validate(cart.id)).toBeTruthy();
});

it("Get a cart from memory", () => {
    let cart = carts.new();

    let cartFromMemory = carts.get(cart.id);

    expect(cart.id).toBe(cartFromMemory.id)
});
