import { CursoDto } from './dto/curso.dto';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { CreateCursoComponent } from './create-curso/create-curso.component';
import {EditCursoComponent} from './edit-curso/edit-curso.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Curso } from '../insterfaces/curso.interface';
import { AlumnoDto } from '../alumno/dto/alumno.dto';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  public cursos=[];
  public alumnos=[];
  alumno: AlumnoDto;

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

  getAlumno(referencia: string) {
    /*this.firestoreService.getAlumno(referencia).subscribe(a => {
     return "id: "+a.payload.id;
    });*/
    return 'hola';
  } 

  
}