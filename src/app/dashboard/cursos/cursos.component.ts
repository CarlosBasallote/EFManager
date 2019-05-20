import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { CreateCursoComponent } from './create-curso/create-curso.component';
import {EditCursoComponent} from './edit-curso/edit-curso.component';
import { MatDialog, MatSnackBar, MatDialogConfig, MatDialogRef } from '@angular/material';
import { Curso } from '../insterfaces/curso.interface';
import { AlumnosCursoComponent } from './alumnos-curso/alumnos-curso.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  public cursos=[];
  dialogRef: MatDialogRef<ConfirmationDialogComponent>;

  constructor(
    private firestoreService: FirestoreService, public dialog: MatDialog
  ) { }



  ngOnInit() {

    this.firestoreService.getCursos().subscribe(
      (cursosSnapshot)=>{
        this.cursos=[];
        cursosSnapshot.forEach(
          (cursoData: any)=>{
            this.cursos.push({
              id: cursoData.payload.doc.id,
              data: cursoData.payload.doc.data()
            });
          })
      });
  }

  openConfirmationDialog(documentId) {
    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmMessage = "Are you sure you want to delete?"

    this.dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.deleteCurso(documentId);
      }
      this.dialogRef = null;
    });
  }

  public deleteCurso(documentId) {
    this.firestoreService.deleteCat(documentId);
      console.log('Documento eliminado!');
   
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(CreateCursoComponent, {
      width: '250px'
    });
    
  }

  editCurso(curso:Curso){
    const dialogRef = this.dialog.open(EditCursoComponent, {
      width: '250px',
      data:{id:curso.id}
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.cursos;
    });
  }

  getAlumnosCurso(curso: Curso) {
    const dialogRef = this.dialog.open(AlumnosCursoComponent, {
      width: '250px',
      data:{id:curso.id , a:curso.alumnos}
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.cursos;
    });
  } 

 
 
}