import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {CartComponent} from './components/cart/cart.component';
import {ProductComponent} from './components/product/product.component';
import {DeliverComponent} from './components/cart/deliver.component';
import {PaymentComponent} from './components/payment/payment.component';
import {InternetBankingComponent} from './components/payment/internet-banking';
import {AboutComponent} from './components/home/about.component';
import {StoreComponent} from './components/home/store.component';
import {LiraProductComponent} from './components/product/lira-product';
import {HomeComponent} from './components/home/home.component';


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
    path: 'deliver',
    component: DeliverComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'store',
    component: StoreComponent,
    children: [
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'lira-product',
        component: LiraProductComponent
      },
    ]
  },
  {
    path: 'ib',
    component: InternetBankingComponent
  }

];
