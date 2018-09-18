import { StarStoreState } from './star-store';
// import { OtherFeautreStoreState } from './otherFeature-store;
import * as auth from '../core/auth/store/auth-state';

export interface State {
  star: StarStoreState.StarState;
  authState: auth.AuthState;
 // otherstates
}
