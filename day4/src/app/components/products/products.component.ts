import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { productsList } from '../../models/productsList';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  count: number = 0;
  products: IProduct[];

  constructor() {
    this.products = productsList;
  }

  removeProductHandler(productId: any) {
    this.products = this.products.filter((product) => product.id != productId);
  }

  editFirstBook() {
    this.products[0] = { ...this.products[0], price: 100 };
  }
  getData(data: any) {
    this.count = data;
  }
}
