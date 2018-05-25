import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Product } from '../../../shared/models/product';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { ProductService } from '../../../shared/services/product.service';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[]=[];
  filteredProducts: Product[]=[];  
  category: string;
  cart$: Observable<ShoppingCart> ;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService ) {}

  async ngOnInit(){
    this.cart$ = await this.shoppingCartService.getCart();
    this.populateProducts();  
    //console.log(this.products);//->[]empty why ?????
    /*
    this.productService.getAll().subscribe(products => {
      this.products = products;
      this.route.queryParamMap.subscribe(params => {
        this.category = params.get('category');//promote to comp field so we can referece it in html to highlight the current selected category
        this.applyFilter();  
      });
    }); //nested observable, can be converted into switchMap
    */
  }

  private populateProducts(){    
    this.productService.getAll().subscribe(products => {
      this.products = products;
      this.route.queryParamMap.subscribe(params => {
        this.category = params.get('category');//promote to comp field so we can referece it in html to highlight the current selected category
        this.applyFilter();//update filteredProducts used to render prod
      });
    }); //nested observable, can be converted into switchMap
    /* 
    this.productService
    .getAll()
    .switchMap(products => {
      this.products = products;
      return this.route.queryParamMap;
    })
    .subscribe(params => {
      this.category = params.get('category');
      this.applyFilter;
    });*/
  }

  private applyFilter() {
    this.filteredProducts = (this.category)?
    this.products.filter(p => p.category === this.category) :
    this.products;
  }    

  filter(query:string) {    
    //filter with category constaint or not(serach all categories)
    this.populateProducts(); //update this.prod + this.filteredProd
    this.filteredProducts = (query) ?
    this.filteredProducts.filter(p=>p.title.toLowerCase().includes(query.toLowerCase())) :
    this.filteredProducts;  
  }
      /*
      this.productService.getAll().subscribe(products => {
        this.products = products;
        this.route.queryParamMap.subscribe(params => {
          this.category = params.get('category');//promote to comp field so we can referece it in html to highlight the current selected category
        
          this.filteredProducts = (this.category) ?
            this.products.filter(p => p.category === this.category) :
            this.products;
        });
      }); //nested observable, can be converted into switchMap
     */ 
    

}
