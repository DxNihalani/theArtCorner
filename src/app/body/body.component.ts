import { Component, Input, OnInit } from '@angular/core';
import { CategoryServiceService } from '../category-service.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-body',
  
  templateUrl: './body.component.html',

  styleUrls: ['./body.component.css']
})


export class BodyComponent implements OnInit {
  products: any[] = [];
  category: string | undefined;

  constructor(private categoryService: CategoryServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.category = data['category'];
      this.categoryService.getProducts().subscribe(products => {
        this.products = products.filter(product => product.category === this.category);
      });
    });
  }
}