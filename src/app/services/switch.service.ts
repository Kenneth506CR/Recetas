import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SwitchService {
  //Activador del modal
  $modal = new EventEmitter<any>();
  //Datos de las recetas
  private data = new BehaviorSubject<any>(null);
  sharedData = this.data.asObservable();
  recetas: any[] = [];

  constructor() {}

  updateData(data: any) {
    this.data.next(data);
  }

  // Método para obtener una receta por su ID
  getRecetaPorId(id: string) {
    return this.recetas.find((receta: { id: string }) => receta.id === id);
  }

  buscarRecetasPorNombre(termino: string): void {
    const recetasFiltradas = this.recetas.filter((receta) =>
      receta.nombre.toLowerCase().includes(termino.toLowerCase())
    );
    this.updateData(recetasFiltradas);
  }
}
