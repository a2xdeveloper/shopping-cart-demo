"use strict";
const supertest = require("supertest");
const uuid = require("uuidv4");
const server = require("./server");
const request = supertest(server);
const items = require("./items");

const prefix = "/v1"

it("Create a cart", async done => {
    let cartResponse = await createCart();

    expect(cartResponse.success).toBeTruthy();    
    
    expect(uuid.isUuid(cartResponse.id)).toBeTruthy();
    
    done();
});

it("Add an item to the cart", async done => {
    let cart = await createCart();
    let url = prefix + "/cart/" + cart.id + "/item/" + items.item1.id + "/" + 1;
    const addedItemResponse = await request.put(url);

    expect(addedItemResponse.body.success).toBeTruthy();

    let listResponse = await list(cart.id);

    expect(listResponse.items[items.item1.id]).toBe(1);    

    done();
});

it("Remove an item from the cart", async done => {
    let cart = await createCart();
    let url = prefix + "/cart/" + cart.id + "/item/" + items.item1.id + "/" + 1;
    const addedItemResponse = await request.put(url);

    expect(addedItemResponse.body.success).toBeTruthy();

    let listResponse = await list(cart.id);

    expect(listResponse.items[items.item1.id]).toBe(1);
    
    const removeItemResponse = await request.delete(url);
    expect(removeItemResponse.body.success).toBeTruthy();

    listResponse = await list(cart.id);

    expect(listResponse.items[items.item1.id]).toBeUndefined();

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