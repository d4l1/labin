import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showMenu: boolean = false;

  navLinks = [
    { path: 'servicios', label: 'Servicios' },
    { path: 'nosotros', label: 'Nosotros' }
  ];

  Links = [
    { path: 'cotizar', label: 'Cotizar'},
    { path: 'contratar', label: 'Contratar'}
  ];

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
