import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts:any;
  private url='https://jsonplaceholder.typicode.com/posts'
  constructor(private http:HttpClient){
    http.get(this.url)
    .subscribe(response =>{
     this.posts=response
    })
  }
createPost(input:HTMLInputElement){
  let post:any={title:input.value}
  input.value='';
  // always use JSON.syringify()method to convert object into a string
  // SENDING DATA to a web server must to be a STRING
this.http.post(this.url,JSON.stringify(post))
.subscribe(response =>{
  post.id=response
  this.posts.splice(0,0,post)
console.log (this.posts)
})
}

}
