import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: './payment.component.html'
})
export class PaymentComponent {
  constructor(private router: Router) {}
  onIb() {
    this.router.navigate(['/ib']);
  }
}
