import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WhoAreWe1Component } from './who-are-we1/who-are-we1.component';
import { HomeComponent } from './home/home.component';


import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WhoAreWe2Component } from './who-are-we2/who-are-we2.component';


@NgModule({
  declarations: [
    AppComponent,
    WhoAreWe1Component,
    HomeComponent,
  ],

  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'whoAreWe1', component: WhoAreWe1Component },
    { path: 'whoAreWe2', component: WhoAreWe2Component }

  ]),
 ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


