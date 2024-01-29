import { Component, Input } from '@angular/core';
import { AgregarComponent } from '../agregar/agregar.component';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [AgregarComponent],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css',
})
export class DetalleComponent {}
