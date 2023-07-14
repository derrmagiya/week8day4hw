"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuid_1 = require("uuid");
class User {
    constructor(name, age) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.age = age;
        this.cart = [];
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getCart() {
        return this.cart;
    }
    addToCart(item) {
        this.cart.push(item);
    }
    removeFromCart(item) {
        this.cart = this.cart.filter(cartItem => cartItem.getId() !== item.getId());
    }
    removeQuantityFromCart(item, quantity) {
        const itemIndex = this.cart.findIndex(cartItem => cartItem.getId() === item.getId());
        if (itemIndex !== -1) {
            const cartItem = this.cart[itemIndex];
            const itemQuantity = cartItem.getQuantity();
            if (itemQuantity !== undefined) {
                const newQuantity = (itemQuantity !== null && itemQuantity !== void 0 ? itemQuantity : 0) - quantity;
                cartItem.setQuantity(newQuantity);
                if (newQuantity <= 0) {
                    this.cart.splice(itemIndex, 1);
                }
            }
        }
    }
    cartTotal() {
        let total = 0;
        for (const item of this.cart) {
            total += item.getPrice();
        }
        return total;
    }
    printCart() {
        console.log("Items in the cart:");
        for (const item of this.cart) {
            console.log(`${item.getName()} - $${item.getPrice()}`);
        }
    }
}
exports.User = User;
