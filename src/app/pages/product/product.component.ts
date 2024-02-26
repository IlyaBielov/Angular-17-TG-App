import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TelegramService } from '../../services/telegram.service';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-product',
  template: `
    <div class="centered">
      <h2 class="title">{{ product.title }}</h2>
      <br />
      <img [src]="product.image" [alt]="product.title">
      <p class="hint">{{ product.text }}</p>
      <p class="hint">{{ product.time }}</p>
    </div>
  `,
})
export class ProductComponent implements OnInit, OnDestroy {
  product: IProduct;

  constructor(
    private products: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private telegram: TelegramService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.products.getById(id as string) as IProduct;

    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    window.history.back();
  }

  ngOnInit(): void {
    this.telegram.BackButton.show();
    this.telegram.BackButton.onClick(this.goBack);
  }

  ngOnDestroy(): void {
    this.telegram.BackButton.offClick(this.goBack);
    this.telegram.BackButton.hide();
  }
}
