import { Component, input } from '@angular/core';
import { SOCIAL_LINKS } from '../../shared/constants/contact';

@Component({
  selector: 'app-social-links',
  imports: [],
  templateUrl: './social-links.html',
  styleUrl: './social-links.scss',
})
export class SocialLinks {
  /** Muestra el @usuario junto al icono (footer). Solo iconos si es false. */
  readonly showHandles = input(false);

  protected readonly links = SOCIAL_LINKS;
}
