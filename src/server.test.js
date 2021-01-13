"use strict";
const supertest = require("supertest");
const { validate, v4 } = require('uuid');
const server = require("./server");
const request = supertest(server);

const prefix = "/v1"

let testItem = v4();

it("Create a cart", async done => {
    let cartResponse = await createCart();

    expect(cartResponse.success).toBeTruthy();    
    
    expect(validate(cartResponse.id)).toBeTruthy();
    
    done();
});

it("Add an item to the cart", async done => {
    let cart = await createCart();
    let url = prefix + "/cart/" + cart.id + "/item/" + testItem + "/" + 1;
    const addedItemResponse = await request.put(url);

    expect(addedItemResponse.body.success).toBeTruthy();

    let listResponse = await list(cart.id);

    expect(listResponse.items[testItem]).toBe(1);    

    done();
});

it("Remove an item from the cart", async done => {
    let cart = await createCart();
    let url = prefix + "/cart/" + cart.id + "/item/" + testItem + "/" + 1;
    const addedItemResponse = await request.put(url);

    expect(addedItemResponse.body.success).toBeTruthy();

    let listResponse = await list(cart.id);

    expect(listResponse.items[testItem]).toBe(1);
    
    const removeItemResponse = await request.delete(url);
    expect(removeItemResponse.body.success).toBeTruthy();

    listResponse = await list(cart.id);

    expect(listResponse.items[testItem]).toBeUndefined();

    done();
});

async function createCart() {
    const res = await request.post(prefix + "/cart");    

    return res.body;
}

async function list(id) {
    const res = await request.get(prefix + "/cart/"+id);
    return res.body;
}