import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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
  url: string = 'http://localhost:3000';
  isEditVisible: boolean = false;

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUsers().subscribe((data: User[]) => {
      this.users = data;
      this.loggedInUser = this.getLoggedInUser();
    });

    this.fetchProducts().subscribe((data: Product[]) => {
      this.products = data;
      this.updateProducts();
    });
  }

  fetchUsers(): Observable<User[]> {
    return this._http.get<User[]>(`${this.url}/users`);
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

  getLoggedInUser(): User | null {
    // Replace this with actual logic to get the logged-in user
    const loggedInUserName = 'Mansi'; // Example logged-in user
    return this.users.find(user => user.uname === loggedInUserName) || null;
  }

  updateUserDetails(updatedUser: User): void {
    if (this.loggedInUser) {
      this._http.put<User>(`${this.url}/users/${this.loggedInUser.uname}`, updatedUser)
        .subscribe(response => {
          this.loggedInUser = response;
          // Update the users array with the updated user details
          const index = this.users.findIndex(user => user.uname === this.loggedInUser!.uname);
          if (index !== -1) {
            this.users[index] = this.loggedInUser;
          }
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