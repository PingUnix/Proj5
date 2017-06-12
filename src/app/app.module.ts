import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { PhonenumberPipe } from './phonenumber.pipe';
import { FlyingHeroesComponent } from './flying-heroes.component';
import { FlyingHeroesPipe } from './flying-heroes.pipe';
import { HeroAsyncMessageComponent } from './hero-async-message.component';
import { FetchJsonPipe } from './fetch-json.pipe';
import { HeroListComponent } from './hero-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ExponentialStrengthPipe,
    PhonenumberPipe,
    FlyingHeroesComponent,
    FlyingHeroesPipe,
    HeroAsyncMessageComponent,
    FetchJsonPipe,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
