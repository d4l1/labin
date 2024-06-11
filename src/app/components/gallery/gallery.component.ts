import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import gsap from 'gsap';

interface Project {
  title: string;
  description: string;
  time: string;
  solution: string;
  image: string;
  expanded: boolean;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0px', opacity: 0 })),
      state('expanded', style({ height: '*', opacity: 1 })),
      transition('collapsed => expanded', [animate('0.3s ease-out')]),
      transition('expanded => collapsed', [animate('0.3s ease-in')]),
    ])
  ]
})
export class GalleryComponent {
  projects: Project[] = [
    {
      title: 'Proyecto A',
      description: 'Descripción del Proyecto A.',
      time: '3 meses',
      solution: 'Solución entregada A.',
      image: 'https://images.pexels.com/photos/2102413/pexels-photo-2102413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      expanded: false
    },
    {
      title: 'Proyecto B',
      description: 'Descripción del Proyecto B.',
      time: '5 meses',
      solution: 'Solución entregada B.',
      image: 'https://images.pexels.com/photos/2102413/pexels-photo-2102413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      expanded: false
    },
    {
      title: 'Proyecto B',
      description: 'Descripción del Proyecto B.',
      time: '5 meses',
      solution: 'Solución entregada B.',
      image: 'https://images.pexels.com/photos/2102413/pexels-photo-2102413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      expanded: false
    },
    // Agregar más proyectos según sea necesario
  ];

  constructor() { }

  expandProject(project: Project): void {
    this.collapseAllProjectsExcept(project);
    project.expanded = true;
  }

  collapseProject(project: Project): void {
    project.expanded = false;
  }

  collapseAllProjectsExcept(selectedProject: Project): void {
    this.projects.forEach(project => {
      if (project !== selectedProject) {
        project.expanded = false;
      }
    });
  }
}
