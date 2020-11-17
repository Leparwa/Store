import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  value:number;
  products:any;
  display: any;
  prName:string;
  price: number;
  Description:string;



  constructor(
    private productSevice: CartServiceService,
    private breakpointObserver: BreakpointObserver,
    private router: Router
    ) { }

  ngOnInit(): void {

    const ProductTobeDisplayed=[
      {
        prName:this.productSevice.ViewProduct.productName,
        price:this.productSevice.ViewProduct.Price,
        Description:this.productSevice.ViewProduct.Description,

      }

    ]
    this.display=ProductTobeDisplayed;

  }



  addToCart(product) {
    product.Quantity=this.value;
    product.totalPrice=product.Quantity*product.price;
    this.productSevice.addToCart(product);
    this.productSevice.TotalP(product.totalPrice);
    window.alert('Your product has been added to the cart!');
    console.log("value" + "  "+this.value);
    this.router.navigateByUrl("");
  }



  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 2, rows: 2},


        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 2},

      ];
    })
  );
}
