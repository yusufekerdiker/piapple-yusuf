import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SehirSecimiComponent } from './sehir-secimi/sehir-secimi.component';
import { FavorilerComponent } from './favoriler/favoriler.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SehirSecimiComponent,
    FavorilerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
