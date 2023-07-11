import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignUpFormComponent {
  form = new FormGroup({
    username:new FormControl(),
    password: new FormControl()
  })

}
