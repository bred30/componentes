import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalinfo',
  templateUrl: './modalinfo.page.html',
  styleUrls: ['./modalinfo.page.scss'],
})
export class ModalinfoPage implements OnInit {
@Input() nombre:string;
@Input() pais:string;

  constructor(private ModalController:ModalController) { }

  ngOnInit() {
  }
  SalirSinArgumentos()
  {
    this.ModalController.dismiss();
  }
  SalirConArgumentos()
  {
    this.ModalController.dismiss({
      nombre: "hijo",
      pais:"Colombia"
    });
  }
}
