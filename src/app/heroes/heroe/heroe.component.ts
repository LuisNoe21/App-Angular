import {Component} from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
  nombre: string = 'Iroman';
  edad: number = 23;

  obtenerNombre(): string {
    //metodo
    return `${this.nombre}  ${this.edad}`;
  }

  get nombreCapitalizado() {
    //getter
    return this.nombre.toUpperCase();
  }

  cambiarNombre(): void {
    //metodo
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void {
    //metod
    this.edad = 45;
  }
}
