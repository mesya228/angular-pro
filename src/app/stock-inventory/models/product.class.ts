export class Product { 
    id: number;
    price: number;
    name: string;
}

export class Item {
    productId: number;
    quantity: number;
}

export class ProductMap {
    productsMap;

    constructor(products) {
        this.productsMap = new Map(products.map(product => [product.id, product]));
    }
}