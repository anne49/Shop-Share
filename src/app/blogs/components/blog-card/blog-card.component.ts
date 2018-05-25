import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'shared/services/blog.service';
import { AuthService } from 'shared/services/auth.service';
import { Blog } from 'shared/models/blog';

@Component({
  selector: 'blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {
  @Input('blog') blog: Blog;
  @Input('owner') owner = false;
  @Input('dummy') dummy = false;
  

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router,
    private auth: AuthService,
  ) {     
  }

  ngOnInit() { }

  delete(blogId) {
    if (confirm('Are you sure to delete this product?')){
      this.blogService.delete(blogId);
      // console.log(blogId);
      this.router.navigate(['/blogs']);
    }
  }
 

}
