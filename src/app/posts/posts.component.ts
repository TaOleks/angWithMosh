import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any;
  private url='https://jsonplaceholder.typicode.com/posts'
  constructor(private http:HttpClient){

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

ngOnInit(): void {
this.http.get(this.url)
    .subscribe(response =>{
     this.posts=response
    })
}

updatePost(post:any){
this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead:true}))
// this.http.put(this.url, JSON.stringify({post}))
.subscribe(response =>{
  console.log(response)
})
}

deletePost(post:any){
  this.http.delete(this.url +'/'+post.id, )
  .subscribe(response=>{
    let index=this.posts.indexOf(post);
    this.posts.splice(index,1)
  })
}

}
