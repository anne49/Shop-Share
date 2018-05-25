import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AdminModule } from 'admin/admin.module';
import { AngularFireModule } from 'angularfire2';
import { SharedModule } from 'shared/shared.module';
import { ShoppingModule } from 'shopping/shopping.module';

import { environment } from '../environments/environment';
import { AdminAuthGuard } from './admin/services/admin-auth-guard.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { CoreModule } from './core/core.module';
import { ProductsComponent } from './shopping/components/products/products.component';
import { HomeComponent } from './core/components/home/home.component';
import { BlogsComponent } from './blogs/components/blogs/blogs.component';
import { BlogsModule } from './blogs/blogs.module';



@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    BlogsModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      { path:'', component: HomeComponent },      
      { path:'login', component: LoginComponent },         
    ])
  ],
  providers: [
    AdminAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
