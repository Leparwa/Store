import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { blueprint } from '../blueprint';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  displayedColumns: string[] = ['productName', 'Description', 'Price', 'Total'];

  constructor(
    private productSevice:CartServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
    //this.ItemsInCart();

  }
  items:any=this.productSevice.getItems();
  dataSource = this.items;
  totaPrice:number=this.productSevice.DisplayTotalPrice;




// ItemsInCart(){
//   this.items=this.productSevice.getItems();

// }
Order(product){
  this.productSevice.ProductsTobePaid=product;
  console.log(product);
  this.router.navigateByUrl("/Pay");
}
}
