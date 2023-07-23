
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any;

  constructor(private service:PostService){

  }

// Types of errors:
// Unexpected errors(Server is offline, Network is down, Unhandled exceptions)
// Expected errors( "Not Found errors 404", "Bad request errors 400")

ngOnInit(): void {
  this.service.getPosts()
      .subscribe(response =>{
       this.posts=response
      }, error =>{
        alert('An unexpected error occurred')
        console.log(error)
      })
  }


createPost(input:HTMLInputElement){
  let post:any={title:input.value}
  input.value='';
  // always use JSON.syringify()method to convert object into a string
  // SENDING DATA to a web server must to be a STRING
this.service.createPost(post)
.subscribe(response =>{
  post.id=response
  this.posts.splice(0,0,post)
console.log (this.posts)
},error =>{
  alert('An unexpected error occurred')
  console.log(error)
})
}


updatePost(post:any){
this.service.updatePost(post)
// this.http.put(this.url, JSON.stringify({post}))
.subscribe(response =>{
  console.log(response)
},error =>{
  alert('An unexpected error occurred')
  console.log(error)
})
}

deletePost(post:any){
  this.service.deletePost(post.id)
  .subscribe(response=>{
    let index=this.posts.indexOf(post);
    this.posts.splice(index,1)
  },error =>{
    alert('An unexpected error occurred')
    console.log(error)
  })
}

}
