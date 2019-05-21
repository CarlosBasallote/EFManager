import { CursoDto } from './../cursos/dto/curso.dto';
import { EditNotaComponent } from './edit-nota/edit-nota.component';
import { ConfirmaDeleteComponent } from './confirma-delete/confirma-delete.component';
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { MatDialog, MatSnackBar, MatDialogConfig, MatDialogRef } from '@angular/material';
import { CreateAlumnoComponent } from './create-alumno/create-alumno.component';
import { Curso } from '../insterfaces/curso.interface';
import { EditAlumnoComponent } from './edit-alumno/edit-alumno.component';
import { Alumno } from '../insterfaces/alumno.interface';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent implements OnInit {

  nombre: string;
  public alumnos=[];
  curso: CursoDto;
  dialogRef: MatDialogRef<ConfirmaDeleteComponent>;
  
 
  constructor(
    private firestoreService: FirestoreService, public dialog: MatDialog
  ) { }

  ngOnInit() { 
    this.firestoreService.getAlumnos().subscribe(
      (alumnosSnapshot)=>{
        this.alumnos=[];
        alumnosSnapshot.forEach(
          (alumnoData: any)=>{
            this.alumnos.push({
              id: alumnoData.payload.doc.id,
              data: alumnoData.payload.doc.data()
            });
          
          })
      });


      

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateAlumnoComponent, {
      width: '250px'
    });
    
  }

  openConfirmationDialog(documentId) {
    this.dialogRef = this.dialog.open(ConfirmaDeleteComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmMessage = "Are you sure you want to delete?"

    this.dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.deleteAlumno(documentId);
      }
      this.dialogRef = null;
    });
  }

  public deleteAlumno(documentId) {
    this.firestoreService.deleteAlumno(documentId);
      console.log('Documento eliminado!');
   
  }

  

  editAlumno(alumno:Alumno){
    const dialogRef = this.dialog.open(EditAlumnoComponent, {
      width: '250px',
      data:{id:alumno.id}
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.alumnos;
    });
  }

  
  editNota(alumno:Alumno){
    const dialogRef = this.dialog.open(EditNotaComponent, {
      width: '250px',
      data:{id:alumno.id}
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.alumnos;
    });
  }

}
