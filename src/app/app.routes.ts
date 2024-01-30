import { Routes } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { DetalleComponent } from './detalle/detalle.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Inicio',
    component: HomeComponent,
  },
  {
    path: 'inicio',
    title: 'Inicio',
    component: HomeComponent,
  },
  {
    path: 'agregar',
    title: 'Agregar Receta',
    component: AgregarComponent,
  },
  {
    path: 'detalle/:id',
    title: 'Detalle Receta',
    component: DetalleComponent,
  },
];
