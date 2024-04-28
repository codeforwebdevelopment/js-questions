// Modelling a car:

class Car {
   constructor(make, model, year) {
       this.make = make;
       this.model = model;
       this.year = year;
   }

   startEngine() {
       console.log('Engine started.');
   }

   drive() {
       console.log('Car is moving.');
   }

   get lang() {
    return this.make;
  }

  set lang(lang) {
    this.make = lang + 'hjnnnnnnnnnnn';
  }
}

let myCar = new Car('Honda', 'Civic', 2020);
console.log(myCar.make); // Honda
console.log(myCar.model); // Civic
console.log(myCar.year); // 2020
myCar.startEngine(); // Engine started.
myCar.drive(); // Car is moving.
myCar.lang = 'kjhk';
console.log(myCar.lang);

// Getter setter

// Modeling a Bank Account:





class BankAccount {
   constructor(name, balance) {
       this._name = name;
       this._balance = balance;
   }
   deposit(amount) {
       this._balance += amount;
   }
   withdraw(amount) {
       if (amount <= this._balance) {
           this._balance -= amount;
       } else {
           console.log('Insufficient funds');
       }
   }
   checkBalance() {
       console.log(`Account balance: $${this._balance}`);
   }
}

let account = new BankAccount('John Doe', 1000);
account.deposit(500); I
account.checkBalance(); // Account balance: $1500
account.withdraw(200);
account.checkBalance(); // Account balance: $1300

// A Shopping Cart:

class Item {
   constructor(name, price) {
       this.name = name;
       this.price = price;
   }
}

class ShoppingCart {
   constructor() {
       this.items = [];
   }
   addItem(item) {
       this.items.push(item);
   }
   removeItem(item) {
       let index = this.items.indexOf(item);
       if (index !== -1) {
           this.items.splice(index, 1);
       }
   }
   getTotal() {
       let total = 0;
       for (let item of this.items) {
           total += item.price;
       }
       return total;
   }
}

let item1 = new Item("Shirt", 20);
let item2 = new Item("Pants", 30);
let item3 = new Item("Shoes", 40);

let cart = new ShoppingCart();
cart.addItem(item1);
cart.addItem(item2);
cart.addItem(item3);
console.log(cart.getTotal()); // 90
cart.removeItem(item2);
console.log(cart.getTotal()); // 60
