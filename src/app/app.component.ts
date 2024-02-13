import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pagina-banda';

  modal: boolean = false;

  componenteActual: string = 'app-home';

  opciones: any[] = [
    { nombre: 'Home', componente: 'app-home' },
    { nombre: 'galeria', componente: 'app-galeria' },
    // Agrega más opciones según sea necesario 
  ];

  cambiarComponente(componente: string) {
    this.componenteActual = componente;
    this.modal = false; // Oculta el menú después de hacer clic en una opción

    const iconoCerrar = document.getElementById("button") as HTMLElement;
    iconoCerrar.classList.toggle("cruz-cerrar");
  }

  abrirMenu() {
    this.modal=!this.modal;
    
    const iconoCerrar = document.getElementById("button") as HTMLElement;
    iconoCerrar.classList.toggle("cruz-cerrar");
  }
}
