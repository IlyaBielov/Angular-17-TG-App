import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2 class="title">{{ title }}</h2>
    <p class="subtitle">{{ subtitle }}</p>
    <ul class="products">
      @for (product of products; track product.id) {
        <li class="product-item" [routerLink]="'/product/' + product.id">
          <div class="product-image">
            <img width="250" height="250" [src]="product.image" [alt]="product.title">
          </div>

          <div class="product-info">
            <h3 class="product-title">{{ product.title }}</h3>
            <p class="hint">{{ product.text }}</p>
            <p class="hint">{{ product.time }}</p>
          </div>
        </li>
      }
    </ul>
  `,
})
export class ProductListComponent {
  @Input() title: string = 'Title';
  @Input() subtitle: string = 'Subtitle';
  @Input() products: IProduct[] = [];
}
