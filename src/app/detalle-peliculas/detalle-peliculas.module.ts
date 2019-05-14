import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetallePeliculasPage } from './detalle-peliculas.page';

const routes: Routes = [
  {
    path: '',
    component: DetallePeliculasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetallePeliculasPage]
})
export class DetallePeliculasPageModule {}
