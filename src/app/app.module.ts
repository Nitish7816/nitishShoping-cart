import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {ProductService} from './services/product.service';
import {routes} from './app.routing';
import {CartComponent} from './components/cart/cart.component';
import {ProductComponent} from './components/product/product.component';
import {FormsModule} from '@angular/forms';
import {DeliverComponent} from './components/cart/deliver.component';
import {PaymentComponent} from './components/payment/payment.component';
import {InternetBankingComponent} from './components/payment/internet-banking';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductComponent,
    DeliverComponent,
    PaymentComponent,
    InternetBankingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
