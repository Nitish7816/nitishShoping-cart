import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: './payment.component.html'
})
export class  InternetBankingComponent {
  constructor(private router: Router) {}
  onIb() {
    this.router.navigate(['/ib']);
  }
}
