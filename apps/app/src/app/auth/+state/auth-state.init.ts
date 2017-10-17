import { AuthState } from './auth-state.interfaces';

export const authStateInitialState: AuthState = {
  authenticated: false,
  token: null
};
