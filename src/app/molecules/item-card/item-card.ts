import { Component, Input } from '@angular/core';
import { TopProductInterface } from '../../shared/interfaces/products.interface';
import { FormatNumberPipe } from '../../shared/pipes/format-number.pipe';

@Component({
  selector: 'app-item-card',
  imports: [FormatNumberPipe],
  templateUrl: './item-card.html',
  styleUrl: './item-card.scss',
})
export class ItemCard {
  @Input() product: TopProductInterface = {title:'Perfume Brand Name',description:'Eau de parfum 100 ml',value:189000,image:'/placeholder-product.svg'};
}
