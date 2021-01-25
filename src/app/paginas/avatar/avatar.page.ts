import { Component, OnInit } from '@angular/core';
interface avatar{
  icono:string;
  nombre:string;

}
@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {
avatar:avatar[]=[
  {
    icono:"assets/img/1.jpg",
    nombre:"Homero Simpson"
  },
  {
    icono:"assets/img/3.jpg",
    nombre:"Marge Simpson"
  }
]
  constructor() { }

  ngOnInit() {
  }

}
