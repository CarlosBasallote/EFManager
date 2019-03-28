import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatCardModule, MatButtonModule, MatListModule, MatProgressBarModule, MatMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { CursosComponent } from './cursos/cursos.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { FirestoreService } from '../services/firestore/firestore.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    MatMenuModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  declarations: [ DashboardComponent, CursosComponent, AlumnoComponent ],
  providers: [FirestoreService, AngularFirestore]
})

export class DashboardModule {}
