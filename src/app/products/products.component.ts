import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: any[] = [];
 
  constructor() { }
 
  ngOnInit(): void {
    /* // Hardcoded sample data for testing */
    this.products = [
      { ename: 'Art Piece 1', description: 'Description 1', url: '' },
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
 
}}
