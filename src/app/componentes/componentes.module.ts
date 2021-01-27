import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';

import { PopComponent } from './pop/pop.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PopComponent
  ],
  exports:[
    HeaderComponent,
    PopComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentesModule { }
