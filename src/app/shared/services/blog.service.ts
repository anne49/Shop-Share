import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from 'shared/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class BlogService {

  constructor(
    private db: AngularFireDatabase,
  ) { }

  async post(blog){
    let result = await this.db.list('/blogs').push(blog);
    return result;
  }

  async update(blogId, blog){
    return await this.db.object('/blogs/'+blogId).update(blog);
  }

  delete(blogId){
    return this.db.object('/blogs/'+blogId).remove();
  }

  getAll(){
    return this.db.list('/blogs');
  } 

  get(blogId){
    return this.db.object('/blogs/'+blogId);
  }


}
