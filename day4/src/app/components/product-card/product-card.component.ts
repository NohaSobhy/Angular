import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { productsList } from '../../models/productsList';



@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent implements OnInit, OnDestroy, OnChanges {
  numberOfProducts: number = 0;
  previousValue: number|null = null;
  products: IProduct[];

  @Input() myProduct: any;

  @Output() OnRemoveProduct = new EventEmitter();
  constructor() {
    this.products = productsList;
  }
  discount() {
    this.products[0] = { ...this.products[0], price: 100 };
    this.products[1] = { ...this.products[1], price: 50 };
    this.products[2] = { ...this.products[2], price: 50 };
    this.products[3] = { ...this.products[3], price: 3000 };
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.previousValue = changes['myProduct'].previousValue?.['price'];
  }
  ngOnDestroy(): void {
    console.log('Fired on Destroy');
  }
  ngOnInit(): void {
    console.log('3-Oninit');
  }
  @Output() onAddProduct = new EventEmitter();
  addToCart() {
    this.numberOfProducts++;
    this.onAddProduct.emit(this.numberOfProducts);
  }
  removeProduct(productId: any) {
    this.OnRemoveProduct.emit(productId);
  }
}
