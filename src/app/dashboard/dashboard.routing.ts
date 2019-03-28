import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { CursosComponent } from './cursos/cursos.component';
import { AlumnoComponent } from './alumno/alumno.component';

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
}];
