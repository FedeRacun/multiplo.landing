import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { ChoiseOportunityComponent } from './views/choise-oportunity/choise-oportunity.component';
import { SimulatorComponent } from './views/simulator/simulator.component';

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
    ContactoComponent,
    ChoiseOportunityComponent,
    SimulatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      radius: 60,
      space: -10,
      outerStrokeGradient: true,
      outerStrokeWidth: 10,
      outerStrokeColor: "#3176BA",
      outerStrokeGradientStopColor: "#004889",
      innerStrokeColor: "transparent",
      innerStrokeWidth: 10,
      animateTitle: false,
      animationDuration: 1000,
      showUnits: true,
      showBackground: false,
      clockwise: false,
      startFromZero: false,
      showSubtitle: false,
      lazy: false
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
