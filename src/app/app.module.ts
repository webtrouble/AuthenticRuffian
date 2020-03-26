import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTING } from './app.routes';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { WomenComponent } from './components/women/women.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    WomenComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
