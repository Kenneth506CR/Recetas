import { Component, Input } from '@angular/core';
import { AgregarComponent } from '../agregar/agregar.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterLink } from '@angular/router';
import { SwitchService } from '../services/switch.service';

@Component({
  selector: 'app-receta',
  standalone: true,
  imports: [AgregarComponent, CommonModule, RouterLink],
  templateUrl: './receta.component.html',
  styleUrl: './receta.component.css',
})
export class RecetaComponent {
  @Input() receta: any;

  constructor(private switchService: SwitchService, private router: Router) {}

  //Selecciona la receta para mostrar los detalles
  verMas() {
    localStorage.setItem('recetaSeleccionada', JSON.stringify(this.receta));
    this.router.navigate(['/detalle', this.receta.id]);
  }
}
