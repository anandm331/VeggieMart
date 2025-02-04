import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CartService } from '../../Service/CartService/cart-service.service';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product: any;
  @Output() productRemoved = new EventEmitter<number>(); 

  private cartService = inject(CartService);

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.productRemoved.emit(this.product.id); 
  }
}
