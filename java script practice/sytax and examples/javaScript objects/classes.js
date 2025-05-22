//class = (ES6 feature) provides a more structured and cleaner way
//          work with objects compared to traditional constructor functions
//          ex. static keyword, encapsulation, inheritance
class product{
    constructor(name,price){
        this.name=name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax){
        return this.price +(this.price*salesTax);
    }
}
const salesTax = 0.05;
const product1 = new product("shirt",19.99);
const product2 = new product("Pants",22.50);
const product3 = new product("Underwear",100.00);
product3.displayProduct();
const total = product3.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);