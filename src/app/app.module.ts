import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    HobbiesComponent,
    WorkComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', component: HomeComponent },
      { path: 'hobbies', component: HobbiesComponent },
      { path: 'work', component: WorkComponent },
      { path: 'contact-me', component: ContactMeComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
