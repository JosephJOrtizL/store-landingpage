import { Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';

interface Testimonial {
  readonly name: string;
  readonly city: string;
  readonly quote: string;
}

type SlotPosition = 'active' | 'prev' | 'next' | 'hidden';

const ROTATION_MS = 5000;

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  private readonly destroyRef = inject(DestroyRef);
  private timer: ReturnType<typeof setInterval> | undefined;
  private autoplayAllowed = false;

  protected readonly items: readonly Testimonial[] = [
    {
      name: 'Valentina R.',
      city: 'Medellin',
      quote: 'Pedi uno para probar y termine encargando tres mas. La fijacion es real, me dura todo el dia de trabajo.',
    },
    {
      name: 'Andres M.',
      city: 'Bogota',
      quote: 'Me asesoraron por WhatsApp para elegir segun lo que me gusta. No senti que me estuvieran vendiendo, sino ayudando.',
    },
    {
      name: 'Laura G.',
      city: 'Cali',
      quote: 'Llego a mi ciudad en tres dias y bien empacado. El aroma es identico al que buscaba y a mitad de precio.',
    },
    {
      name: 'Sebastian P.',
      city: 'Bucaramanga',
      quote: 'Lo compre como regalo y se robo el show. Ya varios amigos me preguntaron donde lo consegui.',
    },
    {
      name: 'Daniela T.',
      city: 'Barranquilla',
      quote: 'Con este clima pocos perfumes aguantan. Este si, y encima recibo mensajes preguntandome cual uso.',
    },
  ];

  protected readonly active = signal(0);

  constructor() {
    // afterNextRender solo corre en el navegador: en SSR el timer nunca se crea
    afterNextRender(() => {
      this.autoplayAllowed = !matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.resume();
    });

    this.destroyRef.onDestroy(() => this.stop());
  }

  protected next(): void {
    this.active.update((i) => (i + 1) % this.items.length);
  }

  protected prev(): void {
    this.active.update((i) => (i - 1 + this.items.length) % this.items.length);
  }

  protected goTo(index: number): void {
    this.active.set(index);
  }

  /** Pausa la rotacion (hover o foco de teclado). */
  protected stop(): void {
    if (this.timer !== undefined) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }

  protected resume(): void {
    if (!this.autoplayAllowed || this.timer !== undefined) {
      return;
    }
    this.timer = setInterval(() => this.next(), ROTATION_MS);
  }

  protected positionOf(index: number): SlotPosition {
    const total = this.items.length;
    const current = this.active();

    if (index === current) return 'active';
    if (index === (current - 1 + total) % total) return 'prev';
    if (index === (current + 1) % total) return 'next';
    return 'hidden';
  }
}
