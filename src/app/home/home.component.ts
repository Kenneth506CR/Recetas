import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AlertComponent } from '../alert/alert.component';
import { RecetaComponent } from '../receta/receta.component';
import { AgregarComponent } from '../agregar/agregar.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SwitchService } from '../services/switch.service';
import { DetalleComponent } from '../detalle/detalle.component';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BuscadorComponent } from '../buscador/buscador.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    AlertComponent,
    RecetaComponent,
    AgregarComponent,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    DetalleComponent,
    RouterLink,
    BuscadorComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  recetas: any[] = [];
  recetaSeleccionada: any[] = [];

  constructor(
    private modalSS: SwitchService,
    private route: ActivatedRoute,
    private switchService: SwitchService
  ) {}

  // Recuperar los datos de LocalStorage y suscribir a actualizaciones
  ngOnInit() {
    const recetas = localStorage.getItem('recetas');
    this.recetas = recetas ? JSON.parse(recetas) : [];

    this.switchService.sharedData.subscribe((data) => {
      this.recetaSeleccionada = data;
    });
    console.log(this.recetas);
  }
}
