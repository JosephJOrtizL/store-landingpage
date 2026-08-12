import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WhatsappFab } from './molecules/whatsapp-fab/whatsapp-fab';
import { Header } from './molecules/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WhatsappFab, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('store-landingpage');
}
