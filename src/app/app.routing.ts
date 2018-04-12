import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {CartComponent} from './components/cart/cart.component';
import {ProductComponent} from './components/product/product.component';
import {DeliverComponent} from './components/cart/deliver.component';
import {PaymentComponent} from './components/payment/payment.component';
import {InternetBankingComponent} from './components/payment/internet-banking';

export const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent
  // },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'products',
    component: ProductComponent
  },
  {
    path: 'deliver',
    component: DeliverComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'ib',
    component: InternetBankingComponent
  }

];
