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
  @Input() message: string | undefined;

  constructor(private router: Router, private modalSS: SwitchService) {}

  //Cerrar el modal de alert
  closeModal() {
    this.modalSS.$modal.emit(false);

    // Verifica el mensaje y redirecciona
    if (this.message == 'La receta se guardó correctamente.') {
      this.router.navigate(['/inicio']);
      console.log('Deberia rediriguir');
    }
  }
}
