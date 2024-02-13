import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pagina-banda';

  modal: boolean = false;

  abrirMenu() {
    this.modal=!this.modal;
    
    const iconoCerrar = document.getElementById("button") as HTMLElement;
    iconoCerrar.classList.toggle("cruz-cerrar");
  }
}
