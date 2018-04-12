import {Component} from '@angular/core';
import {Item} from '../../entities/item.entities';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: './deliver.component.html',
  styleUrls: ['./cart.component.scss']
})
export class DeliverComponent {
  stateData = ['Mumbai', 'Delhi', 'UP', 'MP', 'Bihar'];
  // cart page
  public items: Item[] = [];
  public total: number = 0;
  // count: number =0;
  constructor(
    private activetedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {

  }
  ngOnInit() {
    this.activetedRoute.params.subscribe(param => {
      var id = param['id'];
      console.log(id);
      if (id) {
        var item = {
          product: this.productService.find(id),
          quantity: 1
        };
        console.log(item);
        if (localStorage.getItem('cart') == null) {
          let cart: any = [];
          cart.push(JSON.stringify(item));
          localStorage.setItem('cart', JSON.stringify(cart));
        }else {
          let cart: any = JSON.parse(localStorage.getItem('cart'));
          let index: number = -1;
          for (var i = 0; i < cart.length; i++) {
            let item: Item = JSON.parse(cart[i]);
            if (item.product.id === id) {
              index = i;
              break;
            }
          }
          if (index === -1) {
            cart.push(JSON.stringify(item));
            localStorage.setItem('cart', JSON.stringify(cart));
          }else {
            let item: Item = JSON.parse(cart[index]);
            item.quantity += 1;
            cart[index] = JSON.stringify(item);
            localStorage.setItem('cart', JSON.stringify(cart));
          }
        }
        this.loadCart();
      } else {
        this.loadCart();
      }
    });
  }
  loadCart(): void {
    this.total = 0;
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cart.length; i++) {
      let item = JSON.parse(cart[i]);
      // console.log('item',item);
      this.items.push({
        product: item.product,
        quantity: item.quantity
      });
      // console.log('items',this.items);
      this.total += item.product.price * item.quantity;
    }
  }
  remove(id: string): void {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      let item: Item = JSON.parse(cart[i]);
      if (item.product.id === id) {
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    this.loadCart();
  }
  increment(id: string): void {
    var item = {
      product: this.productService.find(id),
      quantity: 1
    };
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      let item: Item = JSON.parse(cart[i]);
      if (item.product.id === id) {
        index = i;
        break;
      }
    }
    if (index === -1) {
      cart.push(JSON.stringify(item));
      localStorage.setItem('cart', JSON.stringify(cart));
    }else {
      let item: Item = JSON.parse(cart[index]);
      item.quantity += 1;
      cart[index] = JSON.stringify(item);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    this.loadCart();
  }
  decrement(id: string): void {
    var item = {
      product: this.productService.find(id),
      quantity: 1
    };
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      let item: Item = JSON.parse(cart[i]);
      if (item.product.id === id) {
        index = i;
        break;
      }
    }
    if (index === -1) {
      cart.push(JSON.stringify(item));
      localStorage.setItem('cart', JSON.stringify(cart));
    }else {
      let item: Item = JSON.parse(cart[index]);
      item.quantity -= 1;
      cart[index] = JSON.stringify(item);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    this.loadCart();
  }
// end of cart page
  onPay() {
    this.router.navigate(['/payment']);
  }
}
