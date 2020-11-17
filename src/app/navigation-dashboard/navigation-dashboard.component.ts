import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-navigation-dashboard',
  templateUrl: './navigation-dashboard.component.html',
  styleUrls: ['./navigation-dashboard.component.css']
})
export class NavigationDashboardComponent implements OnInit{
  constructor(
    private service: CartServiceService,
    private breakpointObserver: BreakpointObserver

    ) {}
  ngOnInit(): void {
  console.log("Badge value" + " " +this.badgeValue);
  }
  badgeValue:any=this.service.getItems();


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );



}
