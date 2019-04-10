import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatCardModule, MatButtonModule, MatListModule, MatProgressBarModule, MatMenuModule } from '@angular/material';
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
import { CursoDetailComponent } from '../curso-detail/curso-detail.component';

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
    MatProgressBarModule,
    MatMenuModule,
    FlexLayoutModule,FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatDialogModule,
    FormsModule
  ],
  declarations: [ DashboardComponent, CursosComponent, AlumnoComponent, CreateCursoComponent, CursoDetailComponent ],
  providers: [FirestoreService, AngularFirestore,{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}]

  ,entryComponents: [
    CreateCursoComponent
  ],


})


export class DashboardModule {}
