import { Component } from "@angular/core";


@Component({
  selector: 'app-contador',
  template: `
 <h1>{{titulo}}</h1> 
<!--muestra el contenido del tittle que esta en el appcom.ts. Tambien se pueden escribir expresiones matematicas-->

<h1>La base es: <strong>5</strong></h1>
<button (click)="acumular(+base)">+{{base}}</button>
<span>  {{numero}} </span>
<button (click)="acumular(-base)">-{{base}}</button>


    `
})
export class ContadorComponent {
  public titulo: string = 'Contador App';
  public numero: number = 1;
  public base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }

}