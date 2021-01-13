"use strict";
const { v4: uuidv4 } = require('uuid');

class Cart {

    constructor() {
        this.id = uuidv4();
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