import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import {AppUser} from '../../../shared/models/app-user';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;
  isCollapsed = true;
  path;

  constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) {   
  }

  async ngOnInit(){
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser); 
    this.cart$ = await this.shoppingCartService.getCart();
  }

  logout(){
    this.auth.logout();
  }
 
  toggleCollapsed(): void {
    //console.log("before", this.isCollapsed)
    this.isCollapsed = !this.isCollapsed;
    //console.log("after", this.isCollapsed)
  }
  

}
