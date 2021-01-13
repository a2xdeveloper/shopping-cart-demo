"use strict";
const Cart = require("./cart");

it("Add an item", () => {
    const cart = new Cart();
    let itemId = "f69e8077-9571-4b68-a89b-a5553dad0c41";
    let itemId2 = "f69e8077-9571-4b68-a89b-a5553dad0c22";
    cart.addItem(itemId, 1);

    let items = cart.getItems();

    expect(items[itemId]).toBe(1);  

    cart.addItem(itemId2, 2);

    expect(cart.getItems()[itemId2]).toBe(2);

    cart.addItem(itemId, 1);

    expect(cart.getItems()[itemId]).toBe(2);  

    cart.addItem(itemId, 2);

    expect(cart.getItems()[itemId]).toBe(4);
});

it("Remove/decrease quantity an item", () => {
    const cart = new Cart();
    let itemId = "f69e8077-9571-4b68-a89b-a5553dad0c41";  
    let itemId2 = "f69e8077-9571-4b68-a89b-a5553dad0c22";  
    cart.addItem(itemId, 5);
    cart.addItem(itemId2, 5);

    expect(cart.getItems()[itemId]).toBe(5);  
    expect(cart.getItems()[itemId2]).toBe(5);  

    cart.removeItem(itemId, 3);

    expect(cart.getItems()[itemId]).toBe(2);
    expect(cart.getItems()[itemId2]).toBe(5);
    
    cart.removeItem(itemId, 3);

    expect(cart.getItems()[itemId]).toBeUndefined();
    expect(cart.getItems()[itemId2]).toBe(5);

    cart.removeItem(itemId2, 5);
    expect(cart.getItems()[itemId2]).toBeUndefined();
});