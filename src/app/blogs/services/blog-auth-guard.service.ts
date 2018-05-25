import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'shared/services/auth.service';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { BlogService } from 'shared/services/blog.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class BlogAuthGuard implements CanActivate {
blogId: string;

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService,
  ) { }

  canActivate(){
    let blogId = this.route.snapshot.paramMap.get('id');
    return this.auth.user$.switchMap(user => {//switch from user$ to obser<boolean> and return
      let currentUser = user.uid;     
      return this.blogService.get(blogId).map(blog => {//return obser<boolean>
        let blogAuthor = blog.authorId;
        if (currentUser === blogAuthor) return true;

        this.router.navigate(['/blogs/', blogId]);//problematic
        return false;    
      });
    }); 
  }

}
