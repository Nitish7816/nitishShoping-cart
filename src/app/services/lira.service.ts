import {Injectable} from '@angular/core';
import {Product} from '../entities/product.entities';

@Injectable()
export class LiraService {
  private products: Product[];
  constructor() {
    this.products = [
      {id: 'Y1600', name: 'Box', price: 110, photo: 'Y1600.jpeg'},
      {id: 'Y1330', name: 'Box', price: 110, photo: 'Y1330.jpeg'},
      {id: 'N1444', name: 'Box', price: 110, photo: 'N1444.jpeg'},
      {id: '1882', name: 'Box', price: 110, photo: '1882.jpeg'},
      {id: '1832', name: 'Box', price: 110, photo: '1832.jpeg'},
      {id: '1583', name: 'Box', price: 110, photo: '1583.jpeg'},
      {id: '1563', name: 'Box', price: 110, photo: '1563.jpeg'},
      {id: '1502', name: 'Box', price: 110, photo: '1502.jpeg'},
      {id: '1392', name: 'Box', price: 110, photo: '1392.jpeg'},
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
