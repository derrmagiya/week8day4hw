import { Item } from './Item';

export class Shop {
  private items: Item[];

  constructor() {
    this.items = [];
    this.initializeItems();
  }

  private initializeItems(): void {
    const itemA = new Item("Item A", 10, "Description for Item A");
    const itemB = new Item("Item B", 15, "Description for Item B");
    const itemC = new Item("Item C", 20, "Description for Item C");

    this.items.push(itemA, itemB, itemC);
  }

  getItems(): Item[] {
    return this.items;
  }
}