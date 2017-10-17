import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authStateReducer } from './+state/auth-state.reducer';
import { authStateInitialState } from './+state/auth-state.init';
import { AuthStateEffects } from './+state/auth-state.effects';
import { SignComponent } from './sign/sign.component';

// Material design
import { HttpService } from 'apps/app/src/services/http.service';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('authState', authStateReducer, { initialState: authStateInitialState }),
    EffectsModule.forFeature([AuthStateEffects])
  ],
  declarations: [SignComponent],
  providers: [AuthStateEffects, HttpService],
  exports: [SignComponent]
})
export class AuthModule {}
