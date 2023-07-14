import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-form-array',
  templateUrl: './new-form-array.component.html',
  styleUrls: ['./new-form-array.component.css']
})
export class NewFormArrayComponent {
 form=new FormGroup({
  name:new FormControl('', Validators.required),
  contact:new FormGroup({
    email:new FormControl(),
    phone: new FormControl()
  }),
  topics:new FormArray([])
 });

 constructor(fb:FormBuilder){
   fb.group({
    name:['', Validators.required],
    contact:fb.group({
      email:[],
      phone:[]
    })
   })
 }

 addTopic(topic:HTMLInputElement): void{
   this.topics.push(new FormControl(topic.value))
   topic.value='';
 }

 removeTopic(topic:any){
 let index=this.topics.controls.indexOf(topic)
 this.topics.removeAt(index);
 }

 get topics(){
  return this.form.get('topics')as FormArray
 }
}
