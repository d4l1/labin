import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.css'],
})
export class AcordeonComponent implements AfterViewInit {
  items = [
    { 
      title: 'Instalación y configuración de Worklytics para Control de Calidad', 
      content: `
        En Lab-In, nos enorgullece ofrecer soluciones de alta calidad a nuestros clientes. Recientemente, llevamos a cabo la instalación y configuración de Worklytics para mejorar el control de calidad en el trabajo de uno de nuestros clientes.

        Paso 1: Registro y obtención de credenciales
        Comenzamos registrándonos en Worklytics y obteniendo las credenciales de acceso necesarias. Nos aseguramos de conectar Worklytics con las plataformas de Slack y Google Workspaces, las principales herramientas de comunicación y colaboración utilizadas por el cliente.

        Paso 2: Integración con Slack y Google Workspaces
        Configuramos la integración de Worklytics con Slack y Google Workspaces para garantizar una recopilación eficiente de datos. Esto nos permitió obtener información detallada sobre el tiempo dedicado a proyectos, la colaboración en equipos y otros aspectos clave del trabajo diario.

        Paso 3: Configuración de flujos de datos personalizados
        Personalizamos los flujos de datos en Worklytics para adaptarlos a las necesidades específicas de control de calidad del cliente. Definimos qué datos queríamos recopilar y cómo se organizarían en los paneles de control para facilitar el seguimiento y la toma de decisiones.

        Paso 4: Creación de paneles de control personalizados
        Creamos paneles de control personalizados en Worklytics para proporcionar una visión clara y detallada del trabajo en curso. Estos paneles nos permitieron identificar rápidamente áreas de mejora y tomar medidas proactivas para garantizar la calidad en el trabajo.

        Paso 5: Optimización y seguimiento continuo
        Una vez completada la instalación y configuración inicial, realizamos un seguimiento del rendimiento utilizando Worklytics. Ajustamos la configuración según fue necesario para garantizar que el cliente y sus procesos de control estuvieran en línea con los objetivos.
      `, 
      isOpen: false 
    },
    { 
      title: 'Bot scraping con puppeteer para descargar cvs', 
      content: '', 
      isOpen: false 
    },
    { 
      title: 'proyecto 3', 
      content: '', 
      isOpen: false 
    },
    { 
      title: 'Proyecto 4', 
      content: '', 
      isOpen: false 
    },
    { 
      title: 'Proyecto 5', 
      content: '', 
      isOpen: false 
    },
  ];

  ngAfterViewInit(): void {
    // Animaciones iniciales
    this.items.forEach((item, index) => {
      gsap.set(`#content-${index}`, { height: 0, opacity: 0 });
    });
  }

  toggleItem(index: number): void {
    const item = this.items[index];
    item.isOpen = !item.isOpen;
    
    const contentId = `#content-${index}`;
    const height = item.isOpen ? 'auto' : 0;
    const opacity = item.isOpen ? 1 : 0;

    gsap.to(contentId, { height, opacity, duration: 0.3, ease: 'power2.inOut' });
  }
}
