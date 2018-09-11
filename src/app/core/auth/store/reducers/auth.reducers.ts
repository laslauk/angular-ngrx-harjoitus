import { User } from '../../../../models/userModel';

export interface UserState {
  isAuthenticated: boolean;
  user: User | undefined;
  errorMessage: string | undefined;
}

export const initialState: UserState = {
  isAuthenticated: false,
  user: undefined,
  errorMessage: undefined
};
