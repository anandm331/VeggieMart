import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductServiceService } from '../../Service/ProductService/product-service.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent], 
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = signal<any[]>([]);
  private _productService = inject(ProductServiceService);  

  ngOnInit(): void {
    this._productService.getProducts().subscribe({
      next: (data) => {
        this.products.set(data);
        console.log('Products loaded:', data);
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }

  handleProductRemoval(productId: number) {
    this.products.update((currentProducts) => 
      currentProducts.filter((product) => product.id !== productId)
    );
  }
}
