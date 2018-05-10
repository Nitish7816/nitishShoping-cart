import {Component} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./slide.scss']
})
export class HomeComponent {
  slides = [
    {img: "../../../assets/slide/thread1.jpg"},
    {img: "../../../assets/slide/thread3.jpg"},
    {img: "../../../assets/slide/thread2.jpg"},

  ];
  slideConfig = {'slidesToShow': 2, 'slidesToScroll': 1};
  afterChange(e) {
    console.log('afterChange');
  }
}
