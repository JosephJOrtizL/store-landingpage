import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber',
})
export class FormatNumberPipe implements PipeTransform {
  // Se construye una sola vez: crear un Intl.NumberFormat es costoso y
  // transform() corre en cada ciclo de deteccion de cambios.
  private readonly formatter = new Intl.NumberFormat('es-CO', {
    maximumFractionDigits: 0,
  });

  transform(value: number | string | null | undefined): string | number{
    if (value === null || value === undefined || value === '') {
      return value ?? '';
    }

    const numero = typeof value === 'string' ? Number(value) : value;

    if (!Number.isFinite(numero)) {
      return value;
    }

    return `$${this.formatter.format(numero)}`;
  }
}
