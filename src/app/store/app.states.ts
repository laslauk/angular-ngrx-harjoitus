import * as auth from '../core/auth/store/auth-state';

export interface AppState {
  authState: auth.AuthState;
}
