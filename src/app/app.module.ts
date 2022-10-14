import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardSkillsComponent } from './components/hard-skills/hard-skills.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardSkillsComponent,
    SoftSkillsComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
