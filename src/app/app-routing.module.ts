import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { NuevaExpComponent } from './components/experiencia/nueva-exp.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NuevaEduComponent } from './components/educacion/nueva-edu.component';
import { EditarEduComponent } from './components/educacion/editar-edu.component';
import { NuevaSkillComponent } from './components/skills/nueva-skill.component';
import { EditarSkillComponent } from './components/skills/editar-skill.component';
import { EditAcercadeComponent } from './components/acerca-de/edit-acercade.component';
import { EditarProyectoComponent } from './components/proyectos/editar-proyecto.component';
import { NuevoProyectoComponent } from './components/proyectos/nuevo-proyecto.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NuevaExpComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevaedu', component: NuevaEduComponent },
  { path: 'editedu/:id', component: EditarEduComponent },
  { path: 'nuevaskill', component: NuevaSkillComponent },
  { path: 'editskill/:id', component: EditarSkillComponent },
  { path: 'editacercade/:id', component: EditAcercadeComponent },
  { path: 'editarProyecto/:id', component: EditarProyectoComponent },
  { path: 'nuevoProyecto', component: NuevoProyectoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
