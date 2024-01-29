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
  @Input() receta: any;
  constructor(
    private route: ActivatedRoute,
    private recetasService: SwitchService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      // Recuperar las recetas de LocalStorage
      const recetas = localStorage.getItem('recetas');
      if (recetas !== null) {
        // Convertir las recetas de una cadena JSON a un objeto JavaScript
        const recetasObj = JSON.parse(recetas);
        // Buscar la receta con el ID dado
        this.receta = recetasObj.find((receta: any) => receta.id === id);
      }
    }
  }
}
