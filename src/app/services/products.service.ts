import { Injectable } from '@angular/core';
import { IProduct, Products } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  readonly products: IProduct[] = Products;

  getById = (id: string) => this.products.find((p) => p.id === id);

  get byGroup() {
    return this.products.reduce((group: any, prod) => {
      if (!group[prod.type]) {
        group[prod.type] = [];
      }
      group[prod.type].push(prod);
      return group;
    }, {});
  }
}
