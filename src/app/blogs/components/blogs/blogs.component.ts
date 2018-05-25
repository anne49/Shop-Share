import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from 'shared/services/blog.service';
import { Blog } from 'shared/models/blog';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit, OnDestroy {
  blogs: any[];//Blog[]=[];
  filteredBlogs: any[];
  subscription: Subscription;
  blogs$;
  ingredient: string;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    //private db: AngularFireDatabase
  ) { 
    this.populateBlogs();
  } 

  private populateBlogs(){  //   
    //this.blogs$ = this.db.list('/blogs');//this.blogService.getAll();
    this.subscription = this.blogService.getAll().subscribe(blogs => {
      this.blogs = blogs;
      this.route.queryParamMap.subscribe(params => {
        this.ingredient = params.get('ingredient');
        //console.log(this.ingredient);
        this.applyFilter();//update filteredProducts used to render prod
      });
    } );
    // console.log(["Blogs retrieved: " + this.blogs])
  }

  private applyFilter() {
    this.filteredBlogs = (this.ingredient)?
    this.blogs.filter(b => b.blogForm.ingredients.toLowerCase().includes(this.ingredient.toLowerCase())) :
    this.blogs;
  } 

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
