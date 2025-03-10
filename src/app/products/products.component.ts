import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface Product {
  url: string;
  id?: number;
  pname: string;
  description: string;
  category: string;
  price?: number;
 
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
  constructor(private _http: HttpClient) {
    this._http.get<Product[]>(this.url)
    .subscribe(response=>{
      this.allProducts = response;
      this.updateProducts();
    });
  }
  
getProductByCategory(category:string){
  this._http.get<Product[]>(this.url)
  .subscribe(response=>this.product=response);
}

updateProducts(): void {
  this.product = this.allProducts.filter(
    (product) => product.category === this.selectedCategory
  );
}

  // ngOnInit() {
  //   this.fetchProducts().subscribe((data: Product[]) => {
  //     console.log(data);
  //     this.allProducts = data;
  //     this.updateProducts;
  //   });
  // }

  fetchProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this.url);
  }

 

  onCategoryChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const category = target.value;
    this.selectedCategory = category;
    this.updateProducts();
  }

  // ngOnInit(): void {
  //   /* // Hardcoded sample data for testing */
  //   this.products = [
  //     {
  //       ename: 'Art Piece 1',
  //       description: 'Description 1',
  //       url: 'assets/images/crochet1.JPG',
  //     },
  //     {
  //       ename: 'Art Piece 2',
  //       description: 'Description 1',
  //       url: 'assets/images/crochet2.jpg',
  //     },
  //     {
  //       ename: 'Art Piece 3',
  //       description: 'Description 1',
  //       url: 'assets/images/crochet3.jpg',
  //     },
  //     {
  //       ename: 'Art Piece 4',
  //       description: 'Description 1',
  //       url: 'assets/images/crochet4.jpg',
  //     },
  //     {
  //       ename: 'Art Piece 5',
  //       description: 'Description 1',
  //       url: 'assets/images/crochet5.jpg',
  //     },
  //     {
  //       ename: 'Art Piece 6',
  //       description: 'Description 1',
  //       url: 'assets/images/crochet6.jpg',
  //     },
  //     {
  //       ename: 'Art Piece 7',
  //       description: 'Description 1',
  //       url: 'assets/images/crochet7.jpg',
  //     },
  //     {
  //       ename: 'Art Piece 8',
  //       description: 'Description 1',
  //       url: 'assets/images/crochet8.jpg',
  //     },
  //     {
  //       ename: 'Art Piece 9',
  //       description: 'Description 1',
  //       url: 'assets/images/crochet9.jpg',
  //     },
  //     // {
  //     //   ename: 'Art Piece 10',
  //     //   description: 'Description 1',
  //     //   url: 'assets/images/crochet10.jpg',
  //     // },
  //     {
  //       ename: 'Art Piece 10',
  //       description: 'Description 1',
  //       url: 'assets/images/crochet10.jpg',
  //     },
  //     {
  //       ename: 'Art Piece 11',
  //       description: 'Description 1',
  //       url: 'assets/images/crochet11.jpg',
  //     },
  //     {
  //       ename: 'Art Piece 12',
  //       description: 'Description 1',
  //       url: 'assets/images/crochet12.jpg',
  //     },
  //     {
  //       ename: 'Art Piece 13',
  //       description: 'Description 1',
  //       url: 'assets/images/crochet13.jpg',
  //     },
  //     {
  //       ename: 'Art Piece 14',
  //       description: 'Description 1',
  //       url: 'assets/images/crochet14.jpg',
  //     },
  //   ];
  // }
}
