import { Component } from '@angular/core';
import {ApiService} from '../api.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartList:any[]=[];
  productList:any[]=[]
  cartItem:any=[]
  count:number=0;
  msg:string='';
  cartUrl: string = 'http://localhost:3000/cart';
  ProductUrl: string = 'http://localhost:3000/products';
  total:number=0;

  constructor ( private _sc:ApiService, private _http:HttpClient){
    const user: any = localStorage.getItem("loggedInUser");
    const userId = user ? JSON.parse(user).id : null;
      this._http.get<any[]>(this.cartUrl)
      .subscribe(response=>{
        this.cartList = response.filter(item => item.userId === userId);
        this.count = this.cartList.length;      })
    
      this._http.get<any[]>(this.ProductUrl)
      .subscribe(response=>{
        this.productList=response;
        console.log(this.productList);

          for (let i of this.cartList){
           console.log(i);
            this.total= this.total + i.price;
          }
      
      }  
   )
  }

  deleteById(id:string){
    if( confirm ("Delete Cart Item?"))
      {var idUrl ='http://localhost:3000/cart/'+id;
        this._http.delete(idUrl)
        .subscribe(response=>console.log('Item Removed!'));
         
      }
  }
}
