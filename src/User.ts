import { v4 as uuidv4 } from 'uuid';
import { Item } from './Item';

export class User {
  private id: string;
  private name: string;
  private age: number;
  private cart: Item[];

  constructor(name: string, age: number) {
    this.id = uuidv4();
    this.name = name;
    this.age = age;
    this.cart = [];
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  getCart(): Item[] {
    return this.cart;
  }

  addToCart(item: Item): void {
    this.cart.push(item);
  }

  removeFromCart(item: Item): void {
    this.cart = this.cart.filter(cartItem => cartItem.getId() !== item.getId());
  }

  removeQuantityFromCart(item: Item, quantity: number): void {
    const itemIndex = this.cart.findIndex(
      cartItem => cartItem.getId() === item.getId()
    );
    if (itemIndex !== -1) {
      const cartItem = this.cart[itemIndex];
      const itemQuantity = cartItem.getQuantity();
      if (itemQuantity !== undefined) {
        const newQuantity = (itemQuantity ?? 0) - quantity;
        cartItem.setQuantity(newQuantity);
        if (newQuantity <= 0) {
          this.cart.splice(itemIndex, 1);
        }
      }
    }
  }

  cartTotal(): number {
    let total = 0;
    for (const item of this.cart) {
      total += item.getPrice();
    }
    return total;
  }

  printCart(): void {
    console.log("Items in the cart:");
    for (const item of this.cart) {
      console.log(`${item.getName()} - $${item.getPrice()}`);
    }
  }
}