import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  body {
    background-color: F8F6F4; /* Light background color */
    font-family: Arial, sans-serif;
  }
 
  .container {
    margin-top: 20px;
    padding: 20px;
    border-radius: 0;
  }
 
  .list-group-item {
    background-color: #E3F4F4; /* Light blue background for list items */
    color: #333;
    border: none;
  }
 
  .list-group-item:hover {
    background-color: #D2E9E9; /* Slightly darker blue on hover */
  }
 
  .card {
    background-color: #FFFFFF; /* White background for cards */
    border: 1px solid #D2E9E9; /* Border color */
    border-radius: 0px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    /* height: 300px; */
  }
 
  .card-img-top {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
 
  .card-body {
    background-color: #E3F4F4; /* Light blue background for card body */
  }
 
  .card-title {
    color: #333;
  }
 
  .card-text {
    color: #666;
  }
 
  .btn-primary {
    background-color: #C4DFDF; /* Button background color */
    border: none;
    color: #FFFFFF;
  }
 
  .btn-primary:hover {
    background-color: #D2E9E9; /* Button hover color */
  }
 
  a {
    text-decoration: none;
    color: inherit;
  }
 
  a:hover {
    text-decoration: underline;
  }
 
products: any[] = [];
 
  constructor() { }
 
  ngOnInit(): void {
    // Hardcoded sample data for testing
    this.products = [
      { ename: 'Art Piece 1', description: 'Description 1', url: 'path/to/image1.jpg' },
      { ename: 'Art Piece 2', description: 'Description 2', url: 'path/to/image2.jpg' },
      { ename: 'Art Piece 3', description: 'Description 3', url: 'path/to/image3.jpg' },
      { ename: 'Art Piece 1', description: 'Description 1', url: 'path/to/image1.jpg' },
      { ename: 'Art Piece 2', description: 'Description 2', url: 'path/to/image2.jpg' },
      { ename: 'Art Piece 3', description: 'Description 3', url: 'path/to/image3.jpg' },
      { ename: 'Art Piece 1', description: 'Description 1', url: 'path/to/image1.jpg' },
      { ename: 'Art Piece 2', description: 'Description 2', url: 'path/to/image2.jpg' },
      { ename: 'Art Piece 3', description: 'Description 3', url: 'path/to/image3.jpg' },
      { ename: 'Art Piece 1', description: 'Description 1', url: 'path/to/image1.jpg' },
      { ename: 'Art Piece 2', description: 'Description 2', url: 'path/to/image2.jpg' },
      { ename: 'Art Piece 3', description: 'Description 3', url: 'path/to/image3.jpg' }
    ];
  }
 
}
