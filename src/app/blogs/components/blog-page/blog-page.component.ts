import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'shared/services/blog.service';
import { AuthService } from 'shared/services/auth.service';
import { Blog } from 'shared/models/blog';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  blogId;
  blog: Blog;
  blogAuthor;
  currentUser;
  owner = false;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router,
    private auth: AuthService,
  ) {     
  }

  ngOnInit() {
    this.blogId = this.route.snapshot.paramMap.get('id');
    if (this.blogId) {
      this.blogService.get(this.blogId).take(1).subscribe(blog => {
        this.blog = blog;
        console.log(this.blog);
      });
    
      this.getUser();
    }
  }

  // delete() {
  //   if (confirm('Are you sure to delete this product?')){
  //     this.blogService.delete(this.blogId);
  //     this.router.navigate(['/blogs']);
  //   }
  // }
  private getUser(){
    // this.blogService.checkBlogOwnership();
    this.auth.user$.subscribe(user => {
      this.currentUser = user.uid;
      console.log('current:' + this.currentUser);
      this.blogService.get(this.blogId).take(1).subscribe(blog => {
        this.blogAuthor = blog.authorId;
        console.log('author:' + this.blogAuthor);
        // if (this.currentUser === this.blogAuthor) console.log("true");
        this.owner = (this.currentUser === this.blogAuthor);
        console.log(this.owner);
      });
    });    
    // console.log(["Current user: " + this.currentUser]);
    // console.log(["Blog author: " + this.blogAuthor]);
  } 

}
