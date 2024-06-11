import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('backgroundAnimation', { static: false }) backgroundAnimation!: ElementRef;
  showMenu: boolean = false;

  constructor() { }
  
  ngOnInit(): void {
    // Aquí puedes añadir cualquier inicialización que necesites
  }

  navLinks = [
    { path: 'servicios', label: 'Servicios' },
    { path: 'nosotros', label: 'Nosotros' },
    { path: 'integraciones', label: 'Integraciones' }
  ];

  Links = [
    { path: 'agendar', label: 'Agendar llamada'}
  ];

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  ngAfterViewInit(): void {
    this.addAnimation();
  }

  addAnimation(): void {
    this.backgroundAnimation.nativeElement.classList.add('animated-background');
  }
}
