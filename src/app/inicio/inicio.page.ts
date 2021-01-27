import { Component, OnInit } from '@angular/core';
interface Componente{
  icono:string, 
  nombre:string,
  direccion: string,

}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
componente:Componente[]=[
  {
    icono:'person-outline',
    nombre:'Action Sheet',
    direccion: '/action-sheet',
  },
  {
    icono:'pricetag',
    nombre:'Alert',
    direccion: '/alert',
  },
  {
    icono:'planet',
    nombre:'Fab',
    direccion: '/fab',
  },
  {
    icono:'rocket-outline',
    nombre:'Date Time',
    direccion: '/datetime',
  },
  {
    icono:'albums-outline',
    nombre:'Botones',
    direccion: '/buttons',
  },
  {
    icono:'accessibility-outline',
    nombre:'Avatar',
    direccion: '/avatar',
  },
  {
    icono:'attach-outline',
    nombre:'Cards',
    direccion: '/cards',
  },
  {
    icono:'heart-outline',
    nombre:'Slides',
    direccion: '/slides',
  },
  {
    icono:'albums-outline',
    nombre:'checks',
    direccion: '/check',
  },
  {
    icono:'calculator-outline',
    nombre:'Grid',
    direccion: '/grid',
  },
  {
    icono:'bookmarks-outline',
    nombre:'Popover',
    direccion: '/popover',
  },
  {
    icono:'hand-left-outline',
    nombre:'Toast',
    direccion: '/toast',
  }
]
  constructor() { }

  ngOnInit() {
  }

}
