class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    discountedPrice(discountPercent){
        return this.price - (this.price * discountPercent / 100);
    }

}

const product = new Product("Nick",300);
console.log(product.discountedPrice(20));