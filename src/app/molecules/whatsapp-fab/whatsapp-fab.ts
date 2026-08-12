import { Component } from '@angular/core';
import { WHATSAPP_URL } from '../../shared/constants/contact';

@Component({
  selector: 'app-whatsapp-fab',
  imports: [],
  templateUrl: './whatsapp-fab.html',
  styleUrl: './whatsapp-fab.scss',
})
export class WhatsappFab {
  protected readonly whatsappUrl = WHATSAPP_URL;
}
