import { Component } from '@angular/core';
import { SocialLinks } from '../social-links/social-links';

@Component({
  selector: 'app-footer',
  imports: [SocialLinks],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  // Fijo en vez de new Date(): en SSR el servidor y el cliente pueden
  // calcular anios distintos y eso rompe la hidratacion.
  protected readonly year = 2026;
}
