import { Shop } from './Shop';
import { User } from './User';

const shop = new Shop();

const user = new User("John Doe", 25);

const items = shop.getItems();
user.addToCart(items[0]);
user.addToCart(items[1]);

user.printCart();

user.removeFromCart(items[0]);

user.printCart();

user.removeQuantityFromCart(items[1], 2);

user.printCart();