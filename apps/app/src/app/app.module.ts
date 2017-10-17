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
import { RootComponent } from './root/root.component';
import { TopBarComponent } from './root/top-bar/top-bar.component';
import { AuthModule } from './auth/auth.module';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from 'apps/app/src/app/app-routing.module';
import { PageComponent } from './root/page/page.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NxModule.forRoot(),
    AuthModule,
    AppRoutingModule,
    StoreModule.forRoot(clientReducer, { initialState: clientInitialState }),
    EffectsModule.forRoot([ClientEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: [AppComponent, RootComponent, TopBarComponent, PageComponent],
  bootstrap: [AppComponent],
  providers: [ClientEffects]
})
export class AppModule {}
