import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface NavLink {
  readonly label: string;
  readonly fragment: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  host: {
    // Escape cierra el menu movil: si se abre sin querer, se sale sin buscar la X
    '(document:keydown.escape)': 'close()',
  },
})
export class Header {
  protected readonly open = signal(false);

  protected readonly links: readonly NavLink[] = [
    { label: 'Nosotros', fragment: 'nosotros' },
    { label: 'Productos', fragment: 'productos' },
    { label: 'Testimonios', fragment: 'testimonios' },
    { label: 'Preguntas', fragment: 'faq' },
  ];

  protected toggle(): void {
    this.open.update((value) => !value);
  }

  protected close(): void {
    this.open.set(false);
  }
}
