import { Component } from '@angular/core';
import { ItemCard } from '../../molecules/item-card/item-card';
import { TopProductInterface } from '../../shared/interfaces/products.interface';
import { Hero } from '../../molecules/hero/hero';
import { Benefits } from '../../molecules/benefits/benefits';
import { Testimonials } from '../../molecules/testimonials/testimonials';
import { Faq } from '../../molecules/faq/faq';
import { Contact } from '../../molecules/contact/contact';
import { Footer } from '../../molecules/footer/footer';

@Component({
  selector: 'app-landing',
  imports: [ItemCard, Hero, Benefits, Testimonials, Faq, Contact, Footer],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  protected readonly topProducts: TopProductInterface[] =[
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
  ]
}
