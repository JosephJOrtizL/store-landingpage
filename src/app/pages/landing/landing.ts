import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { ItemCard } from '../../molecules/item-card/item-card';
import { TopProductInterface } from '../../shared/interfaces/products.interface';
import { Hero } from '../../molecules/hero/hero';
import { Benefits } from '../../molecules/benefits/benefits';
import { Testimonials } from '../../molecules/testimonials/testimonials';
import { Faq } from '../../molecules/faq/faq';
import { Contact } from '../../molecules/contact/contact';
import { Footer } from '../../molecules/footer/footer';

/** Debe coincidir con $sm de src/styles/_breakpoints.scss */
const CAROUSEL_MAX_WIDTH = 549.98;

/** Copias de la lista que se pintan en movil para simular el bucle. */
const COPIES = 3;

/** Espera a que el scroll se detenga antes de reposicionar. */
const SETTLE_MS = 120;

@Component({
  selector: 'app-landing',
  imports: [ItemCard, Hero, Benefits, Testimonials, Faq, Contact, Footer],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  private readonly destroyRef = inject(DestroyRef);
  private readonly track = viewChild<ElementRef<HTMLElement>>('carouselTrack');
  private settleTimer: ReturnType<typeof setTimeout> | undefined;

  protected readonly topProducts: TopProductInterface[] = [
    {
      title: 'Perfume ámbar',
      description: 'Perfume de ámbar con notas de vainilla y madera.',
      image: 'https://png.pngtree.com/png-clipart/20250719/original/pngtree-rounded-amber-perfume-bottle-with-decorative-crystal-stopper-png-image_21334393.png',
      value: 250000
    },
    {
      title: "Perfume L'toie",
      description: 'Perfume con estracto de cedro del monte Xinchen.',
      image: 'https://png.pngtree.com/png-clipart/20240318/original/pngtree-perfume-bottle-mockup-cutout-png-file-png-image_14613729.png',
      value: 389999
    },
    {
      title: "Perfume Colección Primavera",
      description: 'Perfume diseñado con el mejor extracto de flores de primavera.',
      image: 'https://png.pngtree.com/png-clipart/20240615/original/pngtree-luxury-perfume-packaging-mockup-set-modern-bottle-presentation-templates-isolated-with-png-image_15339840.png',
      value: 100000
    },
    {
      title: "Veneace Fragance Diamond",
      description: 'Perfume de la más alta calidad con estracto de diamante.',
      image: 'https://png.pngtree.com/png-clipart/20250422/original/pngtree-front-view-of-blue-perfume-bottle-mockup-png-image_20815010.png',
      value: 500000
    },
  ];

  /** Solo se activa en el navegador y solo en movil. */
  protected readonly loopEnabled = signal(false);

  /**
   * En escritorio se pintan los productos tal cual. En movil se repiten
   * COPIES veces: el usuario empieza en la copia del medio, asi que tiene
   * una lista completa de recorrido hacia cada lado antes de que haya que
   * reposicionar el scroll.
   */
  protected readonly visibleProducts = computed(() =>
    this.loopEnabled()
      ? Array.from({ length: COPIES }, () => this.topProducts).flat()
      : this.topProducts
  );

  constructor() {
    // Solo navegador: matchMedia no existe en Node y el prerender debe
    // quedarse con los 4 productos reales, sin copias duplicadas.
    afterNextRender(() => {
      const query = matchMedia(`(max-width: ${CAROUSEL_MAX_WIDTH}px)`);
      this.loopEnabled.set(query.matches);

      const onChange = (event: MediaQueryListEvent) => this.loopEnabled.set(event.matches);
      query.addEventListener('change', onChange);
      this.destroyRef.onDestroy(() => query.removeEventListener('change', onChange));
    });

    // Cuando el bucle se activa y el DOM ya tiene las copias, centra el
    // scroll en la copia del medio.
    effect(() => {
      const element = this.track()?.nativeElement;
      if (!element || !this.loopEnabled()) {
        return;
      }
      this.recenter(element);
    });

    this.destroyRef.onDestroy(() => clearTimeout(this.settleTimer));
  }

  /**
   * Se dispara en cada scroll, pero solo actua cuando el gesto termina:
   * mover scrollLeft mientras el dedo sigue deslizando pelea con la inercia
   * de iOS y produce saltos visibles.
   */
  protected onCarouselScroll(): void {
    if (!this.loopEnabled()) {
      return;
    }

    clearTimeout(this.settleTimer);
    this.settleTimer = setTimeout(() => {
      const element = this.track()?.nativeElement;
      if (!element) {
        return;
      }

      const copyWidth = element.scrollWidth / COPIES;

      // Si salio de la copia del medio, se corre una copia entera. Como todas
      // son identicas, la posicion visual no cambia: solo se recupera recorrido.
      if (element.scrollLeft < copyWidth * 0.5) {
        element.scrollLeft += copyWidth;
      } else if (element.scrollLeft > copyWidth * 1.5) {
        element.scrollLeft -= copyWidth;
      }
    }, SETTLE_MS);
  }

  private recenter(element: HTMLElement): void {
    // scrollWidth aun puede ser 0 si el navegador no ha hecho layout
    requestAnimationFrame(() => {
      if (element.scrollWidth > 0) {
        element.scrollLeft = element.scrollWidth / COPIES;
      }
    });
  }
}
