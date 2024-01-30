import { Component, Input } from '@angular/core';
import { AgregarComponent } from '../agregar/agregar.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SwitchService } from '../services/switch.service';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [AgregarComponent, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css',
})
export class DetalleComponent {
  receta: any;

  constructor(
    private switchService: SwitchService,
    private route: ActivatedRoute
  ) {}

  //Seleccionar la receta asignada
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const storedReceta = localStorage.getItem('recetaSeleccionada');

    if (storedReceta !== null) {
      this.receta = JSON.parse(storedReceta);
    }
  }
}
