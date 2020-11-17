import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CartServiceService } from '../cart-service.service';
import { blueprint } from '../blueprint';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  ngOnInit() {
  this.getProd();
  }
  products:blueprint[]=[];
  getProd(){
  this.productSevice.getProduct().subscribe(
    (data)=>this.products=data
    );
    console.log("information" + this.products)
  }



  view(edit:any){
    this.productSevice.ViewProduct=edit;
    this.router.navigateByUrl("edit")
   }
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },


        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },

      ];
    })
  );



  constructor(
    private breakpointObserver: BreakpointObserver,
    private productSevice:CartServiceService,
    private router: Router
    ) {}
}
