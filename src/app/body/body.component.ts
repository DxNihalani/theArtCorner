import { Component, Input, OnInit } from '@angular/core';
import { CategoryServiceService } from '../category-service.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../authservice.service';
import { ApiService } from '../api.service';

interface Product {
  url: string;
  id: string;
  pname: string;
  description: string;
  category: string;
  price: number;
}

@Component({
  selector: 'app-body',
  
  templateUrl: './body.component.html',

  styleUrls: ['./body.component.css']
})


export class BodyComponent implements OnInit {
   products: Product[] = [];
    filteredProducts: Product[] = [];
    categories = ['Sculpting', 'Painting', 'Crochet', 'Photography', 'Pen Sketch'];
    selectedCategory:any= 'Crochet';
    url: string = 'http://localhost:3000/products';
    
  
     constructor(private _http: HttpClient, private _sc:ApiService) {
       this._http.get<Product[]>(this.url)
       .subscribe(response=>{
         this.products = response;
        // localStorage.setItem("Category",this.selectedCategory);
         this.updateProducts();
       });
     }
   
   
    ngOnInit(): void {
     
      this.fetchProducts().subscribe((data: Product[]) => {
        this.products = data;
        this.updateProducts();
      });
    }

    fetchProducts(): Observable<Product[]> {
      return this._http.get<Product[]>(`${this.url}`);
    }
  
   
    updateProducts(): void {
      this.selectedCategory= localStorage.getItem("Category");
      console.log(this.selectedCategory);
      this.products= this.products
        .filter(x=> x.category === this.selectedCategory)
        .slice(0, 3); // Display only the first 3 products
        //console.log("here");
    }
  
    loading:boolean = false;
    addToCartByID( id:string){
      this._sc.getProductByID(id);
      // this._s.addToCart();
    }
}