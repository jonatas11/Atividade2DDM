import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedraPapelTesouraPageRoutingModule } from './pedra-papel-tesoura-routing.module';

import { PedraPapelTesouraPage } from './pedra-papel-tesoura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedraPapelTesouraPageRoutingModule
  ],
  declarations: [PedraPapelTesouraPage]
})
export class PedraPapelTesouraPageModule {}
