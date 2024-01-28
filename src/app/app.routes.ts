import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DetalleComponent } from './detalle/detalle.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home Page',
    component: HomeComponent,
  },
  {
    path: 'inicio',
    title: 'Home Page',
    component: HomeComponent,
  },
  {
    path: 'agregar',
    title: 'Add Recipe',
    component: AgregarComponent,
  },
  {
    path: 'detales',
    title: 'Details Recipe',
    component: DetalleComponent,
  },
];
