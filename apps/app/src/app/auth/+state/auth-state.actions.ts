import { User } from '../../../models/user.model';
import { Action } from '@ngrx/store';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';
export const LOG_OUT = 'LOG_OUT';
export const TRY_SIGN_IN = 'TRY_SIGN_IN';
export const TRY_SIGN_UP = 'TRY_SIGN_UP';
export const SET_TOKEN = 'SET_TOKEN';

export class SignIn implements Action {
  readonly type = SIGN_IN;
}
export class SignUp implements Action {
  readonly type = SIGN_UP;
}
export class Logout implements Action {
  readonly type = LOG_OUT;
}
export class TrySignin implements Action {
  readonly type = TRY_SIGN_IN;
  constructor(public payload: { login: string; password: string }) {}
}
export class TrySignup implements Action {
  readonly type = TRY_SIGN_UP;
  constructor(public payload: User) {}
}
export class SetToken implements Action {
  readonly type = SET_TOKEN;
  constructor(public payload: string) {}
}

// export interface DataLoaded {
//   type: 'DATA_LOADED';
//   payload: {};
// }
// export interface LoadData {
//   type: 'LOAD_DATA';
//   payload: {};
// }

export type AuthStateAction = SignIn | SignUp | Logout | TrySignin | TrySignup | SetToken;
