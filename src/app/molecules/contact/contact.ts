import { Component } from '@angular/core';
import { SocialLinks } from '../social-links/social-links';
import { WHATSAPP_URL } from '../../shared/constants/contact';

@Component({
  selector: 'app-contact',
  imports: [SocialLinks],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly whatsappUrl = WHATSAPP_URL;
}
