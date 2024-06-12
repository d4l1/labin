import { Component } from '@angular/core';

@Component({
  selector: 'app-integraciones',
  templateUrl: './integraciones.component.html',
  styleUrls: ['./integraciones.component.css']
})
export class IntegracionesComponent {
  buscarTexto: string = '';
  integracionesDisponibles: { nombre: string, enlace: string, porcentajeUso: number }[] = [
    { nombre: 'Slack + Worklytics', enlace: 'https://worklytics.com', porcentajeUso: 90 },
    { nombre: 'Google Sheets + Power BI', enlace: 'https://sheets.google.com', porcentajeUso: 90 },
    { nombre: 'Salesforce + Mailchimp', enlace: 'https://salesforce.com', porcentajeUso: 190 },
    { nombre: 'Zendesk + Slack', enlace: 'https://zendesk.com', porcentajeUso: 90 },
    { nombre: 'Trello + Google Calendar', enlace: 'https://trello.com', porcentajeUso: 90 },
    { nombre: 'GitHub + Jenkins', enlace: 'https://github.com', porcentajeUso: 90 },
    { nombre: 'Jira + Confluence', enlace: 'https://jira.com', porcentajeUso: 90 },
    { nombre: 'Asana + Google Drive', enlace: 'https://asana.com', porcentajeUso: 90 },
    { nombre: 'Zoom + Microsoft Teams', enlace: 'https://zoom.com', porcentajeUso: 90 },
    { nombre: 'Dropbox + Salesforce', enlace: 'https://dropbox.com', porcentajeUso: 90 },
    { nombre: 'HubSpot + Zapier', enlace: 'https://hubspot.com', porcentajeUso: 90 },
    { nombre: 'Shopify + QuickBooks', enlace: 'https://shopify.com', porcentajeUso: 90 },
    { nombre: 'WordPress + Mailchimp', enlace: 'https://wordpress.com', porcentajeUso: 90 },
    { nombre: 'Stripe + Shopify', enlace: 'https://stripe.com', porcentajeUso: 90 },
    { nombre: 'LinkedIn + Microsoft Outlook', enlace: 'https://linkedin.com', porcentajeUso: 90 },
    { nombre: 'Facebook + Google Analytics', enlace: 'https://facebook.com', porcentajeUso: 90 },
    { nombre: 'Twitter + Zendesk', enlace: 'https://twitter.com' , porcentajeUso: 31},
    { nombre: 'Instagram + HubSpot', enlace: 'https://instagram.com', porcentajeUso: 90 },
    { nombre: 'Pinterest + Hootsuite', enlace: 'https://pinterest.com', porcentajeUso: 90 },
    { nombre: 'YouTube + Buffer', enlace: 'https://youtube.com', porcentajeUso: 25 },
    { nombre: 'Amazon Seller Central + ShipStation', enlace: 'https://amazon.com', porcentajeUso: 90 },
    { nombre: 'eBay + PayPal', enlace: 'https://ebay.com', porcentajeUso: 90 },
    { nombre: 'Etsy + Square', enlace: 'https://etsy.com', porcentajeUso: 30 },
    { nombre: 'Google Ads + Facebook Ads', enlace: 'https://google.com', porcentajeUso: 20 }
  ];
  
  integracionesFiltradas: { nombre: string, enlace: string, porcentajeUso: number }[] = [];
  mostrarFormulario: boolean = false;

  constructor() {
    this.integracionesFiltradas = this.integracionesDisponibles.slice(); // Copia todas las integraciones disponibles al inicio
  }

  filtrarIntegraciones() {
    if (this.buscarTexto.trim() === '') {
      // Si el campo de búsqueda está vacío, mostrar todas las integraciones disponibles
      this.integracionesFiltradas = this.integracionesDisponibles.slice();
    } else {
      // Filtrar las integraciones basadas en el texto de búsqueda
      this.integracionesFiltradas = this.integracionesDisponibles.filter(integracion =>
        integracion.nombre.toLowerCase().includes(this.buscarTexto.trim().toLowerCase())
      );
    }
  }

  crearIntegracion(form: any) {
    console.log('Formulario enviado:', form);
    // Aquí iría la lógica para enviar el formulario y crear la integración
    // Por simplicidad, aquí solo mostramos el contenido del formulario en la consola
    // Después de enviar el formulario, lo reseteamos y ocultamos
    this.ocultarForm();
  }

  mostrarForm() {
    this.mostrarFormulario = true;
  }

  ocultarForm() {
    this.mostrarFormulario = false;
  }
}
