"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shop_1 = require("./Shop");
const User_1 = require("./User");
// Create a Shop
const shop = new Shop_1.Shop();
// Create a User
const user = new User_1.User("John Doe", 25);
// Add items from the shop to the user's cart
const items = shop.getItems();
user.addToCart(items[0]);
user.addToCart(items[1]);
// Print the user's cart
user.printCart();
// Remove all instances of a single item from the user's cart
user.removeFromCart(items[0]);
// Print the user's cart
user.printCart();
// Remove a quantity from the user's cart
user.removeQuantityFromCart(items[1], 2);
// Print the user's cart
user.printCart();
