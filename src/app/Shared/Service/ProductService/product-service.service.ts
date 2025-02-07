import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  getProducts(): Observable<any> {
    const products = [
      {
        "id": 1,
        "name": "Fresh Carrots",
        "image": "assets/images/carrots.jpg",
        "price": 2.99,
        "original_price": 3.99,
        "discount": "25% OFF",
        "category": "Vegetables",
        "rating": "Best",
        "in_stock": true
      },
      {
        "id": 2,
        "name": "Broccoli",
        "image": "assets/images/broccoli.jpg",
        "price": 1.99,
        "original_price": 2.49,
        "discount": "20% OFF",
        "category": "Vegetables",
        "rating": "Good",
        "in_stock": true
      },
      {
        "id": 3,
        "name": "Organic Apples",
        "image": "assets/images/apples.jpg",
        "price": 4.99,
        "original_price": 5.99,
        "discount": "15% OFF",
        "category": "Fruits",
        "rating": "Better",
        "in_stock": true
      },
      {
        "id": 4,
        "name": "Bananas",
        "image": "assets/images/bananas.jpg",
        "price": 0.99,
        "original_price": 1.25,
        "discount": "20% OFF",
        "category": "Fruits",
        "rating": "Good",
        "in_stock": true
      },
      {
        "id": 5,
        "name": "Organic Milk",
        "image": "assets/images/milk.jpg",
        "price": 3.49,
        "original_price": 4.39,
        "discount": "20% OFF",
        "category": "Dairy",
        "rating": "Best",
        "in_stock": true
      },
      {
        "id": 6,
        "name": "Cheese",
        "image": "assets/images/yogurt.jpg",
        "price": 2.99,
        "original_price": 3.50,
        "discount": "15% OFF",
        "category": "Dairy",
        "rating": "Better",
        "in_stock": true
      },
      {
        "id": 7,
        "name": "Yogurt",
        "image": "assets/images/yogurt.jpg",
        "price": 2.99,
        "original_price": 3.50,
        "discount": "15% OFF",
        "category": "Dairy",
        "rating": "Better",
        "in_stock": true
      },
      {
        "id": 8,
        "name": "Yogurt",
        "image": "assets/images/yogurt.jpg",
        "price": 2.99,
        "original_price": 3.50,
        "discount": "15% OFF",
        "category": "Dairy",
        "rating": "Better",
        "in_stock": true
      },
      {
        "id": 9,
        "name": "Greek",
        "image": "assets/images/yogurt.jpg",
        "price": 2.99,
        "original_price": 3.50,
        "discount": "15% OFF",
        "category": "Dairy",
        "rating": "Better",
        "in_stock": true
      }
    ];
    return of(products); 
  }
}
