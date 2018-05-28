import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'shared/shared.module';
import { RouterModule } from '@angular/router';
import { BlogsComponent } from './components/blogs/blogs.component';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { BlogFormComponent } from './components/blog-form/blog-form.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { HoverContainerComponent } from 'shared/components/hover-container/hover-container.component';
import { BlogAuthGuard } from './services/blog-auth-guard.service';

@NgModule({
  imports: [
    BrowserModule, BrowserAnimationsModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild([      
      { path: 'blogs/:id/edit',
        component: BlogFormComponent,
        canActivate: [AuthGuard, BlogAuthGuard  ]//      
      },
      { path:'blogs/new',  
        component: BlogFormComponent, 
        canActivate: [AuthGuard] 
      },
      { path: 'blogs/:id',
        component: BlogPageComponent,    
      },      
      { path:'blogs', component: BlogsComponent }
    ])
  ],
  providers: [
    BlogAuthGuard
  ],
  declarations: [
    BlogsComponent,
    BlogFormComponent,
    BlogCardComponent,
    BlogPageComponent,
  ]
})
export class BlogsModule { }
