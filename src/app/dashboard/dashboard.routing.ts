import { Routes } from '@angular/router';

import { CursosComponent } from './cursos/cursos.component';
import { AlumnoComponent } from './alumno/alumno.component';

export const DashboardRoutes: Routes = [{
  path: '',
  component: CursosComponent
},{
  path:'cursos',
  component: CursosComponent
},
{
  path:'alumnos',
  component: AlumnoComponent
}];
