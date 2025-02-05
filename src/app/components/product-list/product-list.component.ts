import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductServiceService } from '../../Shared/Service/ProductService/product-service.service';
import { SearchService } from '../../Service/search-service.service';
import { SearchPipe } from '../../Pipe/SearchPipe/search-pipe.pipe';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent,SearchPipe], 
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = signal<any[]>([]);
  private _productService = inject(ProductServiceService); 
  searchService = inject(SearchService) 

  searchText = signal(""); 

  constructor() {
    effect(() => {
      this.searchService.searchText$.subscribe((text) => {
        this.searchText.set(text); 
      });
    });
  }

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
