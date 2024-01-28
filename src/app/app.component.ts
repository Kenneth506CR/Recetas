import { Component } from '@angular/core';
import { AgregarComponent } from './agregar/agregar.component';
import { DetalleComponent } from './detalle/detalle.component';
import { HeaderComponent } from './header/header.component';
import {
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AppComponent,
    AgregarComponent,
    DetalleComponent,
    HeaderComponent,
    RouterModule,
    FooterComponent,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.resetConfig(routes);
  }
}
