import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../service/data.service';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
usuarios:Observable<any> 
//@ViewChild(IonList) ionList:IonList; 
@ViewChild(IonList) ionList:IonList; 

  constructor(private dataservice:DataService) { }

  ngOnInit() {
    this.usuarios=this.dataservice.getUsuarios()
  }
favorito(usuario)
{
  console.log(usuario);
  this.ionList.closeSlidingItems();
}
compartir(usuario)
{
  console.log(usuario)
  this.ionList.closeSlidingItems();

}
eliminar(usuario)
{
  console.log(usuario)
  this.ionList.closeSlidingItems();

}
}
