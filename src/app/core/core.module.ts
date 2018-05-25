import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsNavbarComponent } from 'app/core/components/bs-navbar/bs-navbar.component';
import { HomeComponent } from 'app/core/components/home/home.component';
import { LoginComponent } from 'app/core/components/login/login.component';
import { SharedModule } from 'shared/shared.module';
import { BsFooterComponent } from './components/bs-footer/bs-footer.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent, 
    BsFooterComponent 
  ],
  exports: [
    BsNavbarComponent,
    HomeComponent,
    BsFooterComponent
  ]
})
export class CoreModule { }
