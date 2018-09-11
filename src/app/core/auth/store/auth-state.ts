import { User } from '../../../models/userModel';


export interface AuthState {
  isAuthenticated: boolean;
  user: User | undefined;
  errorMessage: string | undefined;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  user: undefined,
  errorMessage: undefined
};
