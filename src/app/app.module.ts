import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { PublicationsComponent } from './publications/publications.component';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { AUTH_PROVIDERS } from 'angular2-jwt';
import { Auth } from './auth-service.service';
import { CommentsListComponent } from './publications/comments-list/comments-list.component';
import { CommentComponent } from './publications/comments-list/comment.component';
import { PublishComponent } from './publications/publish.component';
import { MapComponent } from './publications/map.component';
import { OnePublicationComponent } from './publications/one-publication.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PublicationsComponent,
    CommentsListComponent,
    CommentComponent,
    PublishComponent,
    MapComponent,
    OnePublicationComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBNMvz9aT6Kpx9e1rgLjlQmBhK62vrSM9s'
    })
  ],
  providers: [
    AUTH_PROVIDERS,
    Auth,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
