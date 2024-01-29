import { Component, Input, OnInit } from '@angular/core';
import { SwitchService } from '../services/switch.service';
import { AgregarComponent } from '../agregar/agregar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [AgregarComponent],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent {
  constructor(private router: Router, private modalSS: SwitchService) {}

  @Input() message: string | undefined;

  closeModal() {
    this.modalSS.$modal.emit(false); // Cierra el modal

    // Verifica si el mensaje es "La receta se guardó correctamente"
    if (this.message == 'La receta se guardó correctamente.') {
      // Redirige al usuario a la página de inicio
      this.router.navigate(['/inicio']); // Aquí se produce el error
      console.log('Deberia rediriguir');
    }
  }
}
