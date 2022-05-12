import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HowWeDidComponent } from './views/how-we-did/how-we-did.component';
import { HowToInvestComponent } from './views/how-to-invest/how-to-invest.component';
import { ProfitsComponent } from './views/profits/profits.component';
import { FooterComponent } from './views/footer/footer.component';
import {ContactoComponent} from './views/footer/modal/contacto/contacto.component';

// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    NavbarComponent,
    HowWeDidComponent,
    HowToInvestComponent,
    ProfitsComponent,
    FooterComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
