import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
courses=[
  {id:1, name:'course 1'},
  {id:2, name:'course 2'},
  {id:3, name:'course 3'},
]

onAdd(){
  this.courses.push({id:4, name:'course 4'})
}

onRemove(course:{id:number,name:string}):void{
  let index= this.courses.indexOf(course)
  this.courses.splice(index, 1)
//  this.courses = this.courses.filter(it=>it!=course) -  for me it's better
}

onChange(course:{id:number,name:string}){
  course.name = 'UPDATE'
}
}
