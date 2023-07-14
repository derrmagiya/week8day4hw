"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = void 0;
const Item_1 = require("./Item");
class Shop {
    constructor() {
        this.items = [];
        this.initializeItems();
    }
    initializeItems() {
        const itemA = new Item_1.Item("Item A", 10, "Description for Item A");
        const itemB = new Item_1.Item("Item B", 15, "Description for Item B");
        const itemC = new Item_1.Item("Item C", 20, "Description for Item C");
        this.items.push(itemA, itemB, itemC);
    }
    getItems() {
        return this.items;
    }
}
exports.Shop = Shop;
