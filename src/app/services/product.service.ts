import {Injectable} from '@angular/core';
import {Product} from '../entities/product.entities';

@Injectable()
export class ProductService {
  private products: Product[];
  constructor() {
    this.products = [
      {id: 'p4', name: 'Apple', price: 20, photo: 'apple.jpg'},
      {id: 'p2', name: 'orange', price: 21, photo: 'orange.jpg'},
      {id: 'p3', name: 'grapes', price: 22, photo: 'grapes.jpg'},
    ];
  }
  findAll(): Product[] {
    return this.products;
  }
  find(id: string): Product {
    const productIndex = this.getSelectedIndex(id);
    console.log('productIndex+++++++++++++++',productIndex);
    return this.products[productIndex];
  }
  getSelectedIndex(id: string): number {
    // const index = this.products.findIndex(product => product.id == id);
    // return index;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        return i;
      }
    }
    return -1;
  }
}
