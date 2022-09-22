import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts: Post[] = [];
  Url = "http://localhost:4201/posts"

  constructor(private http:HttpClient){}
  getPosts() {
    return this.http.get<Post[]>(this.Url);
  }

  getPost(id: number) {
    return this.http.get<Post>(`${this.Url}/${id}`);
  }

  updatePost(data: Partial<Post>, id: number) {
   return this.http.patch<Post>(`${this.Url}/${id}`,data)
  }
}
