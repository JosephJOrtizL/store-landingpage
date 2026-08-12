import { Component } from '@angular/core';

interface Benefit {
  readonly title: string;
  readonly text: string;
}

@Component({
  selector: 'app-benefits',
  imports: [],
  templateUrl: './benefits.html',
  styleUrl: './benefits.scss',
})
export class Benefits {
  protected readonly benefits: readonly Benefit[] = [
    {
      title: 'Calidad que se queda',
      text: 'Trabajamos cada fragancia buscando fijacion y caracter, para que te acompane todo el dia y no se desvanezca en una hora.',
    },
    {
      title: 'Propias y de exportacion',
      text: 'Creamos nuestras propias fragancias y seleccionamos perfumes de exportacion. Todo lo que vendemos lo probamos antes.',
    },
    {
      title: 'Llegamos a todo el pais',
      text: 'Enviamos a cualquier ciudad o municipio de Colombia, para que la distancia no sea la razon por la que no encuentras tu esencia.',
    },
  ];
}
