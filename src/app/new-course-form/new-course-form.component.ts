import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

  finish=this.greatWork()
  isClick=false

  categories=[
    {id:1, name:'Development'},
    {id:2, name:'Art'},
    {id:3, name:'Languages'}
  ]

  submit(course:NgForm){
    console.log(course)
  }

  greatWork(){
   this.isClick=true
    return 'You did great work Oleksii!'
  }
}
