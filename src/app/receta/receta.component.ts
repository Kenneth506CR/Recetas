import { Component, Input } from '@angular/core';
import { AgregarComponent } from '../agregar/agregar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-receta',
  standalone: true,
  imports: [AgregarComponent, CommonModule],
  templateUrl: './receta.component.html',
  styleUrl: './receta.component.css',
})
export class RecetaComponent {
  @Input() receta: any;
}
