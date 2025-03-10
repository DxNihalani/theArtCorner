import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../authservice.service';

interface User {
  uname: string;
  email: string;
  address: string;
  contact: string;
}

interface Product {
  url: string;
  id?: number;
  pname: string;
  description: string;
  category: string;
  price?: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  users: User[] = [];
  loggedInUser: User | null = null;
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories = ['Sculpting', 'Painting', 'Crochet', 'Photography', 'Pen Sketch'];
  selectedCategory: string = 'Sculpting';
  url: string = 'http://localhost:3000/users';
  isEditVisible: boolean = false;

  constructor(private _http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    this.loggedInUser = this.authService.getLoggedInUser();
    if (this.loggedInUser) {
      this.fetchUserDetails(this.loggedInUser.uname).subscribe((user: User) => {
        this.loggedInUser = user;
      });
    }

    this.fetchProducts().subscribe((data: Product[]) => {
      this.products = data;
      this.updateProducts();
    });
  }

  fetchUserDetails(uname: string): Observable<User> {
    return this._http.get<User>(`${this.url}/users/${uname}`);
  }

  fetchProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(`${this.url}/products`);
  }

  onCategoryChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const category = target.value;
    this.selectedCategory = category;
    this.updateProducts();
  }

  updateProducts(): void {
    this.filteredProducts = this.products
      .filter(product => product.category === this.selectedCategory)
      .slice(0, 3); // Display only the first 3 products
  }

  updateUserDetails(updatedUser: User): void {
    if (this.loggedInUser) {
      this._http.put<User>(`${this.url}/users/${this.loggedInUser.uname}`, updatedUser)
        .subscribe(response => {
          this.loggedInUser = response;
          alert('User details updated successfully!');
        }, error => {
          console.error('Error updating user details:', error);
        });
    }
  }

  toggleEdit(): void {
    this.isEditVisible = !this.isEditVisible;
  }
}