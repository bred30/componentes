import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
slider=[
  {
    title:'Ionic is Awsone',
    description:'Ionic is built on top',
    image:"assets/img/1.jpg"
  },
  {
    title:'Ionic is full native',
    description:'Ionic also uses SAAS',
    image:"assets/img/2.jpg"
  },
  {
    title:'Ionic 3 is the latest version',
    description:'Angular 4 is the latest version',
    image:"assets/img/5.png"
  }
]
  constructor() { }

  ngOnInit() {
  }

}
