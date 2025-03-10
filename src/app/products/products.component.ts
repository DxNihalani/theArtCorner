import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ApiService} from '../api.service'

interface Product {
  url: string;
  id: string;
  pname: string;
  description: string;
  category: string;
  price: number;
 
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  categories = [
    'Sculpting',
    'Painting',
    'Crochet',
    'Photography',
    'Pen Sketch',
  ];
  selectedCategory: string = 'Sculpting';
  product: Product[] = [];
  allProducts: Product[] = [];
  url: string = 'http://localhost:3000/products';

  //load products on website : products page main.
  constructor(private _http: HttpClient, private _s:ApiService) {
    this._http.get<Product[]>(this.url)
    .subscribe(response=>{
      this.allProducts = response;
      this.updateProducts();
    });
  }

  //add specific item to cart
  loading:boolean = false;
  addToCartByID( id:string){
    this._s.getProductByID(id);
    // this._s.addToCart();
  }
  

// filter and display categories of products 
updateProducts(): void {
  this.product = this.allProducts.filter(
    (product) => product.category === this.selectedCategory
  );
}
  onCategoryChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const category = target.value;
    this.selectedCategory = category;
    this.updateProducts();
  }

}