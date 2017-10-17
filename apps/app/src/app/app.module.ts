import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { clientReducer } from './+state/client.reducer';
import { clientInitialState } from './+state/client.init';
import { ClientEffects } from './+state/client.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    StoreModule.forRoot(clientReducer, { initialState: clientInitialState }),
    EffectsModule.forRoot([ClientEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [ClientEffects]
})
export class AppModule {}
