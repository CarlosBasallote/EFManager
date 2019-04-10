import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { CursosComponent } from './cursos/cursos.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { CursoDetailComponent } from '../curso-detail/curso-detail.component';

export const DashboardRoutes: Routes = [{
  path: '',
  component: DashboardComponent
},{
  path:'cursos',
  component: CursosComponent
},
{
  path:'alumnos',
  component: AlumnoComponent
},
{
  path:'cursoDetail',
  component:CursoDetailComponent
}];
