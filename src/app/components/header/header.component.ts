import { Component, computed, inject, signal } from '@angular/core';
import { CartService } from '../../Service/CartService/cart-service.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = signal("VeggieMart");
  cartService = inject(CartService);
  
  cart = computed(() =>
    this.cartService.cartItems().reduce((sum, item) => sum + item.quantity, 0)
  );
}
