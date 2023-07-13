import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
// So for add multiply validation errors we use array
export class SignUpFormComponent {
  form = new FormGroup({

    username:new FormControl('',
    Validators.required,
    UsernameValidators.ShouldBeUnique),
    password: new FormControl('', Validators.required)
  })

  get username(){
    return this.form.get('username')
  }

}
