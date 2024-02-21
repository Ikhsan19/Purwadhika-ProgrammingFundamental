// Number 2

// create class product
// create class transaction extends dari product
// 




class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Transaction extends Product {
    constructor() {
        super()
        this.total = 0;
        this.allProduct = [];
        this.qty = [];
    }
    addToCart(product, quantity) {
        this.allProduct.push(product);
        this.qty.push(quantity);
        this.total += product.price * quantity;
    }
    showTotal() {
        return this.total;
    }
    checkOut() {
        this.result = "";
        for (let i = 0; i < this.allProduct.length; i++) {
            this.result += `${this.allProduct[i].name} x ${this.qty[i]} = $${this.allProduct[i].price * this.qty[i]}\n`
        }
        return `${this.result}------------------------------\nAll Total: $${this.total}`
    }
}

const product1 = new Product("Nvidia", 1000);
const product2 = new Product("AMD", 500);
const product3 = new Product("Logitik", 2500);

const transaction = new Transaction()

transaction.addToCart(product1, 1);
transaction.addToCart(product2, 2);
transaction.addToCart(product2, 3);

console.log(transaction.showTotal())
console.log(transaction.checkOut())