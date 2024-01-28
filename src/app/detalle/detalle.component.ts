import { Component } from '@angular/core';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {
  nombre = 'Gallo Pinto';
  descripcion =
    'Es un platillo tipico de Costa Rica el cual se consume comunmente en el desayuno.';
  ingredientes = [
    {
      id: 1,
      nombre: 'Arroz',
      cantidad: '1/4 de taza',
    },
    {
      id: 2,
      nombre: 'Frijoles',
      cantidad: '2/4 de taza',
    },
    {
      id: 3,
      nombre: 'Cebolla',
      cantidad: '2 unidades',
    },
    {
      id: 4,
      nombre: 'Chile',
      cantidad: '1 unidad',
    },
    {
      id: 5,
      nombre: 'Salsa Lizano',
      cantidad: '3 cucharadas',
    },
  ];
}
