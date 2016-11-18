import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { PublicationsComponent } from './publications/publications.component';

import { AUTH_PROVIDERS } from 'angular2-jwt';
import { Auth } from './auth-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PublicationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AUTH_PROVIDERS,
    Auth,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
