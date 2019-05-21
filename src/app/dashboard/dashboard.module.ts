import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatCardModule, MatButtonModule, MatListModule, MatProgressBarModule, MatMenuModule, MatListItem } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { CursosComponent } from './cursos/cursos.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { FirestoreService } from '../services/firestore/firestore.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { CreateCursoComponent } from './cursos/create-curso/create-curso.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EditCursoComponent } from './cursos/edit-curso/edit-curso.component';
import { AlumnosCursoComponent } from './cursos/alumnos-curso/alumnos-curso.component';
import { ConfirmationDialogComponent } from './cursos/confirmation-dialog/confirmation-dialog.component';
import { ConfirmaDeleteComponent } from './alumno/confirma-delete/confirma-delete.component';
import { CreateAlumnoComponent } from './alumno/create-alumno/create-alumno.component';
import { EditAlumnoComponent } from './alumno/edit-alumno/edit-alumno.component';
import { EditNotaComponent } from './alumno/edit-nota/edit-nota.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatSelectModule,
    MatProgressBarModule,
    MatMenuModule,
    FlexLayoutModule,FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatDialogModule,
    FormsModule
  ],
  declarations: [ DashboardComponent, CursosComponent, AlumnoComponent, CreateCursoComponent,EditCursoComponent, AlumnosCursoComponent, ConfirmationDialogComponent, ConfirmaDeleteComponent, CreateAlumnoComponent, EditAlumnoComponent, EditNotaComponent ],
  providers: [FirestoreService, AngularFirestore,{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}]
  ,schemas: [CUSTOM_ELEMENTS_SCHEMA]
  ,entryComponents: [
    CreateCursoComponent,
    EditCursoComponent,
    AlumnosCursoComponent,
    ConfirmationDialogComponent ,
    ConfirmaDeleteComponent,
    CreateAlumnoComponent,
    EditAlumnoComponent, 
    EditNotaComponent ],


})


export class DashboardModule {}
