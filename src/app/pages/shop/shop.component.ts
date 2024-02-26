import { Component, inject } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { ProductsService } from '../../services/products.service';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductListComponent],
  template: `
    <app-product-list 
      title="Separate skill" 
      subtitle="Explore in-demand technologies to expand your stack and add that coveted checkmark to your resume" \
      [products]="products.byGroup['skill']"
    /> 
    <app-product-list 
      title="Intensives" 
      subtitle="Express programs where you get maximum benefits in a short period of time" 
      [products]="products.byGroup['intensive']"
    /> 
    <app-product-list 
      title="Free courses" 
      subtitle="Necessary skills and portfolio projects for your efforts" 
      [products]="products.byGroup['course']"
    /> 
  `,
})
export class ShopComponent {
  telegram = inject(TelegramService);
  products = inject(ProductsService);

  constructor() {
    this.telegram.MainButton.hide()
  }
}
