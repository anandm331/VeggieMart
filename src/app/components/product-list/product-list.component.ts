import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductServiceService } from '../../Service/product-service.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent], 
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  private _productService = inject(ProductServiceService);  

  ngOnInit(): void {
    this._productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log('Products loaded:', data);
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }
}
