import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authStateReducer } from './+state/auth-state.reducer';
import { authStateInitialState } from './+state/auth-state.init';
import { AuthStateEffects } from './+state/auth-state.effects';
import { SignComponent } from './sign/sign.component';

// Material design
import { HttpService } from '../../services/http.service';
import {MatButtonModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('authState', authStateReducer, { initialState: authStateInitialState }),
    EffectsModule.forFeature([AuthStateEffects]),
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  declarations: [SignComponent],
  providers: [AuthStateEffects, HttpService],
  exports: [SignComponent]
})
export class AuthModule {}
