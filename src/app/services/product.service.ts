import {Injectable} from '@angular/core';
import {Product} from '../entities/product.entities';

@Injectable()
export class ProductService {
  private products: Product[];
  constructor() {
    this.products = [
      {id: '700', name: 'Box', price: 110, photo: '700.jpg'},
      {id: '01914', name: 'Box', price: 110, photo: '01914.jpg'},
      {id: 'H712', name: 'Box', price: 110, photo: 'H712.jpg'},
      {id: 'H783', name: 'Box', price: 110, photo: 'H783.jpg'},
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
