import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Goku', 'OnePunchMan', 'Baki', 'Yujiro', 'Thor'];

  heroeBorrado: string = '';

  borrarHeroe() {
    // console.log('hola');
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
