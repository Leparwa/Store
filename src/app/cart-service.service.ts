import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { blueprint } from './blueprint';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private PropductApi="https://5f86b4e0c8a16a0016e6ba6a.mockapi.io/Easylimited";

  constructor(private httpC: HttpClient) { }
  getProduct():Observable<blueprint[]>{
    return this.httpC.get<blueprint[]>(this.PropductApi);
  }
  ViewProduct:any;
  items = [];
  totalprice=[];
  DisplayTotalPrice:number;
  ProductsTobePaid=[];

  addToCart(product) {
    this.items.push(product);
  }
TotalP(TPrice){
this.totalprice.push(TPrice);
let sum =this.totalprice.reduce(function(a,b){
  return a+b;
})
console.log(sum);
this.DisplayTotalPrice=sum;
}
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
