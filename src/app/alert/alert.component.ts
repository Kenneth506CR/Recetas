import { Component, Input, OnInit } from '@angular/core';
import { SwitchService } from '../services/switch.service';
import { AgregarComponent } from '../agregar/agregar.component';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [AgregarComponent],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent {
  constructor(private modalSS: SwitchService) {}

  @Input() message: string | undefined;

  closeModal() {
    this.modalSS.$modal.emit(false);
  }
}
