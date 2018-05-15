import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InfoNavbarComponent } from './components/navbars/info-navbar/info-navbar.component';
import { NavbarComponent } from './components/navbars/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { FeedbackComponent } from './components/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    InfoNavbarComponent,
    UsersComponent,
    ChallengesComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
