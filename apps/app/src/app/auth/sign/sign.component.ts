import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { Store } from '@ngrx/store';
import { AuthState, AuthStateState } from 'apps/app/src/app/auth/+state/auth-state.interfaces';
import { NgForm } from '@angular/forms';
import * as fromActions from '../+state/auth-state.actions';

@Component({
  selector: 'sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  constructor(private store: Store<AuthStateState>) {}

  onsubmit(form: NgForm) {
    const formData = form.value;
    this.store.dispatch(new fromActions.TrySignin({login: 'authraz',password: 'authdwa'}));
  }
  ngOnInit() {}
}
