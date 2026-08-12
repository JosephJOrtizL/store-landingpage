import { Component } from '@angular/core';

interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  protected readonly items: readonly FaqItem[] = [
    {
      question: 'Hacen envios a toda Colombia?',
      answer:
        'Si. Enviamos a todas las ciudades y municipios del pais. El tiempo de entrega suele ser de 2 a 5 dias habiles segun el destino, y te compartimos el numero de guia apenas despachamos tu pedido.',
    },
    {
      question: 'Los perfumes son propios o importados?',
      answer:
        'Ambos. Somos un emprendimiento con fragancias propias que desarrollamos nosotros mismos, y complementamos el catalogo con perfumes de exportacion seleccionados uno a uno. Todo lo que vendemos lo probamos antes de ofrecerlo.',
    },
    {
      question: 'Cuanto dura la fragancia en la piel?',
      answer:
        'Depende de la concentracion y de tu tipo de piel, pero nuestras fragancias estan formuladas para durar entre 6 y 10 horas. Si nos cuentas que buscas, te recomendamos la que mejor se ajuste a tu rutina.',
    },
    {
      question: 'Como hago un pedido?',
      answer:
        'Escribenos por WhatsApp con el perfume que te interesa. Te confirmamos disponibilidad, precio y tiempo de envio, y coordinamos el pago y la entrega por ahi mismo. No necesitas crear ninguna cuenta.',
    },
    {
      question: 'Puedo comprar al por mayor para revender?',
      answer:
        'Claro. Manejamos precios especiales por volumen para quienes quieran revender. Escribenos por WhatsApp y te enviamos la lista de precios mayoristas.',
    },
  ];
}
