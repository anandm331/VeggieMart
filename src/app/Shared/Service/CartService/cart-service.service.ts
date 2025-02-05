import { Injectable, signal } from '@angular/core';
import { ProductModel } from '../../Models/ProductModel';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = signal<{ product: ProductModel; quantity: number }[]>([]);

  addToCart(product: ProductModel) {
    const existingItem = this.cartItems().find((item) => item.product.id === product.id);

    if (existingItem) {
      this.cartItems.update((items) =>
        items.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      this.cartItems.update((items) => [...items, { product, quantity: 1 }]);
    }
  }
}
