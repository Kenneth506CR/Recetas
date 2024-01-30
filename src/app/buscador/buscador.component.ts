import { Component, Input, OnInit } from '@angular/core';
import { SwitchService } from '../services/switch.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css',
})
export class BuscadorComponent implements OnInit {
  searchText: string = '';
  recetas: any[] = [];
  showResults: boolean = false;
  @Input() receta: any;

  constructor(private switchService: SwitchService, private router: Router) {}

  // buscador.ts
  verMas(index: number) {
    const receta = this.filteredRecipes[index];
    localStorage.setItem('recetaSeleccionada', JSON.stringify(receta));
    this.router.navigate(['/detalle', index]);
  }

  ngOnInit() {
    this.recetas = JSON.parse(localStorage.getItem('recetas') || '[]');
  }

  get filteredRecipes() {
    if (this.searchText && this.searchText.length > 0) {
      return this.recetas.filter((receta) =>
        receta.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      return [];
    }
  }

  onFocus() {
    this.showResults = true;
  }

  onBlur() {
    this.showResults = false;
  }
}
