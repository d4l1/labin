import { Component, OnInit } from '@angular/core';

interface TeamMember {
  name: string;
  position: string;
  imageUrl: string;
  linkedinUrl: string;
  main: string;
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teamTitle: string = 'Nuestro Equipo';
  teamDescription: string = 'Conoce al equipo que hace posible nuestro proyecto.';
  
  teamMembers: TeamMember[] = [
    {
      name: 'Dalí Juárez',
      position: 'Founder',
      imageUrl: '/assets/images/dalijuarez.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/dali-juarez/',
      main: 'Soy concientemente feliz'
    },
    {
      name: 'Nombre del Miembro 2',
      position: 'Cargo 2',
      imageUrl: 'path_to_image_2',
      linkedinUrl: 'linkedin_profile_link_2',
      main: ''
    },
    // Agrega más miembros del equipo aquí...
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
