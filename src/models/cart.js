"use strict";
const uuid = require("uuidv4");

class Cart {

    constructor() {
        this.id = uuid.uuid();
        this.items = {};
    }

    addItem(id, quantity) {
        let quantityAsNumber = parseInt(quantity);
        if (!this.items[id]) {
            this.items[id] = quantityAsNumber;
        } else {
            this.items[id] += quantityAsNumber;
        }
    }

    removeItem(id, quantity) {
        if (this.items[id]) {
            this.items[id] -= quantity;
            if (this.items[id] <= 0) {
                delete this.items[id];
            }
        }
    }

    getItems() {
        return this.items;
    }

}

module.exports = Cart;