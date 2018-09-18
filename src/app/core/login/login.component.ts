import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { User } from '../../models/userModel';
import { Validators } from '@angular/forms';
import { State } from '../../root-store/root-state';
import { Store } from '@ngrx/store';

import {LogIn} from '../auth/store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();


  constructor(private formBuilder: FormBuilder, private store$: Store<State>) { }

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });


  ngOnInit() {

  }

  onSubmit(): void {
    this.user.email = this.loginForm.value.email;
    this.user.password = this.loginForm.value.password;
    console.log(this.user);

    this.store$.dispatch(new LogIn(payload));

  }

}
