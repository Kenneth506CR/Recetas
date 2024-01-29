import { Component } from '@angular/core';
import { SwitchService } from '../services/switch.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css',
})
export class BuscadorComponent {
  terminoBusqueda: string = '';
  recetasEncontradas: any[] = [];

  constructor(private switchService: SwitchService) {}

  buscarRecetasPorNombre(): void {
    this.switchService.buscarRecetasPorNombre(this.terminoBusqueda);
  }
}
