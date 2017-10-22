import { AuthState } from './auth-state.interfaces';
import { AuthStateAction } from './auth-state.actions';
import * as AuthActions from './auth-state.actions';
import { authStateInitialState } from './auth-state.init';

export function authStateReducer(state: AuthState = authStateInitialState, action: AuthStateAction): AuthState {
  switch (action.type) {
    case AuthActions.SIGN_UP:
    case AuthActions.SIGN_IN: {
      return {
        ...state,
        authenticated: true
      };
    }
    case AuthActions.LOG_OUT: {
      return {
        ...state,
        authenticated: false
      };
    }
    case AuthActions.SET_TOKEN: {
      return {
        ...state,
        token: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
