import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RootStoreModule } from './root-store';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './core/auth/store/effects/auth.effects';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RootStoreModule,
    CoreModule,
    AppRoutingModule,
    EffectsModule.forRoot([AuthEffects]),

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
