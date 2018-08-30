import { Action } from '@ngrx/store';
import { Star } from '../../models/starModel';


export enum ActionTypes {
  LOAD_REQUEST = '[Star] Load Request',
  LOAD_FAILURE = '[Star] Load Failure',
  LOAD_SUCCESS = '[Star] Load Success'
}

export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: {error: String}) {}
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: {items: Star[]}) {}
}

export type StarActions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;
