import { Component, OnInit } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import {AppUser} from '../../../shared/models/app-user';
import { Blog } from 'shared/models/blog';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from 'shared/services/blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  author: any;
  blogForm = {
    "title": "",
    "imageUrl": "",
    "ingredients": "",
    "notes": ""
  };
  blog = {
    "authorId": "",
    "authorName": "",
    "blogForm": this.blogForm,
    "datePost": new Date().getTime()
  };
  blogId;

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService) {      
    }

  async ngOnInit(){//
    this.auth.user$.subscribe(user => {
      this.author = user; 
      // console.log(this.author);
      this.blog.authorId = user.uid;
      this.blog.authorName = user.displayName;
    });    
    this.blogId = this.route.snapshot.paramMap.get('id');
    if(this.blogId){
      this.blogService.get(this.blogId).take(1).subscribe(blog => this.blog = blog);
    }
  }
  
  async save(){
    // this.blog.datePost = new Date().getTime();
    let blog = new Blog(this.author.displayName, this.author.uid, this.blog.blogForm);//...
    // console.log(blog);
    if (this.blogId) {
      await this.blogService.update(this.blogId, blog);
    } else {
      let result = await this.blogService.post(blog);      
    }
    this.router.navigate(['/blogs']); //, result.key
  }

  delete() {
    if (confirm('Are you sure to delete this product?')){
      this.blogService.delete(this.blogId);
      this.router.navigate(['/blogs']);
    }
  }

}
