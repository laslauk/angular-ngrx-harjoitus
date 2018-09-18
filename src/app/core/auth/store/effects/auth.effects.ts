import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, pipe, of, from, interval, merge, fromEvent, } from 'rxjs';
import { map, filter, scan, tap, switchMap } from 'rxjs/operators';

import { AuthService } from '../../../../services/auth.service';
import { AuthActionTypes, LogIn } from '../actions/auth.actions';
import { LoginComponent } from '../../../login/login.component';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
  // Effects here

  @Effect()
  LogIn$: Observable<any> = this.actions$.ofType(AuthActionTypes.LOGIN).pipe(
  map( (action: LogIn) => action.payload),
  switchMap( payload => {
    return this.authService.logIn(payload.email, payload.password);
  }),
  map( (user) => {
    console.log(user);
  })
  );


}
