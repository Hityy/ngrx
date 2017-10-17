import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { of } from 'rxjs/observable/of';
import { AuthStateState } from './auth-state.interfaces';
import * as AuthActions from 'apps/app/src/app/auth/+state/auth-state.actions';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Http, Response, Headers } from '@angular/http';
import * as fromHttpService from 'apps/app/src/services/http.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class AuthStateEffects {
  @Effect()
  signin = this.actions$
    .ofType(AuthActions.TRY_SIGN_IN)
    .map((action: AuthActions.TrySignin) => {
      return action.payload;
    })
    .switchMap((authSignInFor: { login: string; password: string }) => {
      return this.httpService.toSign(authSignInFor, 'signin').map((res) => {
        return res.json().token;});
    })
    // .switchMap((response: Response) => {
    //   const signedUser = response.json();
    //   return signedUser.token;
    // })
    .mergeMap((token: string) => {
      return [
        {
          type: AuthActions.SignIn
        },
        {
          type: AuthActions.SET_TOKEN,
          token: token
        }
      ];
    });
  constructor(private actions$: Actions, private http: Http, private httpService: fromHttpService.HttpService) {}
}
