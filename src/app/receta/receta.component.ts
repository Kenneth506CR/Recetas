import { Component, Input } from '@angular/core';
import { AgregarComponent } from '../agregar/agregar.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-receta',
  standalone: true,
  imports: [AgregarComponent, CommonModule, RouterLink],
  templateUrl: './receta.component.html',
  styleUrl: './receta.component.css',
})
export class RecetaComponent {
  @Input() receta: any;
}
