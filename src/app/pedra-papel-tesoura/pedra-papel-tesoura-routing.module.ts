import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedraPapelTesouraPage } from './pedra-papel-tesoura.page';

const routes: Routes = [
  {
    path: '',
    component: PedraPapelTesouraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedraPapelTesouraPageRoutingModule {}
