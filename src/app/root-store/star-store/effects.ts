import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import { StarApiService } from '../../services/star-api.service';

import * as starActions from './actions';

@Injectable()
export class StarStoreEffects {
  constructor(private dataService: DataService, private actions$: Actions, private starApiService: StarApiService) {}


  @Effect()
  loadRequestEffect$: Observable<Action> = this.actions$.ofType<starActions.LoadRequestAction>(starActions.ActionTypes.LOAD_REQUEST)
    .pipe(startWith( new starActions.LoadRequestAction()), switchMap( action =>
      this.dataService.getItemsObs().pipe(
        map(
          items => new starActions.LoadSuccessAction({items})
        ),
        catchError( error => observableOf(new starActions.LoadFailureAction({error}))
        )
      )
    )
  );



}
