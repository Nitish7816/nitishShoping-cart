import {Component, OnInit} from '@angular/core';
import {Product} from '../../entities/product.entities';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'lira-product',
  templateUrl: './index.component.html'
})
export class LiraProductComponent implements OnInit{
  public products: Product[];
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.products = this.productService.findAll();
  }
}
