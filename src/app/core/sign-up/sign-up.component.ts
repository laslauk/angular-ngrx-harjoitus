import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { User } from '../../models/userModel';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User = new User();


  constructor(private formBuilder: FormBuilder) { }

  signupForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });


  ngOnInit() {

  }

  onSubmit(): void {
    this.user.email = this.signupForm.value.email;
    this.user.password = this.signupForm.value.password;
    console.log(this.user);

  }
}
