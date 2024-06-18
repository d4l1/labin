import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { ServicesComponent } from './components/services/services.component';
import { AcordeonComponent } from './components/acordeon/acordeon.component';
import { FreelancesComponent } from './components/freelances/freelances.component';
import { IntegracionesComponent } from './components/integraciones/integraciones.component';
import { IntroComponent } from './components/intro/intro.component';
import { TeamComponent } from './components/team/team.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TaskmeComponent } from './shared/taskme/taskme.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ServicesComponent,
    AcordeonComponent,
    IntegracionesComponent,
    HeaderComponent,
    IntroComponent,
    TeamComponent,
    FreelancesComponent,
    FooterComponent,
    TaskmeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
