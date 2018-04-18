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
import {HeaderComponent} from './components/home/header.component';
import {FooterComponent} from './components/home/footer.component';
import {AboutComponent} from './components/home/about.component';
import { StoreComponent} from './components/home/store.component';
import {LiraProductComponent} from './components/product/lira-product';
import {HomeComponent} from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductComponent,
    DeliverComponent,
    PaymentComponent,
    InternetBankingComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    StoreComponent,
    LiraProductComponent,
    HomeComponent,
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
