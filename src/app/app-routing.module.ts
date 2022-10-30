import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { NuevaExpComponent } from './components/experiencia/nueva-exp.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';

const routes: Routes = [
  {path: '', component: PortfolioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component: NuevaExpComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
