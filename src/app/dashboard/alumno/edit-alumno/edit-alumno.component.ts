import { CursoDto } from './../../cursos/dto/curso.dto';
import { AlumnoDto } from './../dto/alumno.dto';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { Alumno } from '../../insterfaces/alumno.interface';
import { Curso } from '../../insterfaces/curso.interface';

@Component({
  selector: 'app-edit-alumno',
  templateUrl: './edit-alumno.component.html',
  styleUrls: ['./edit-alumno.component.scss']
})
export class EditAlumnoComponent implements OnInit {

  nombre: string;
  alumno: Alumno;
  id: string;
  public cursos = [];
  curso: CursoDto;
  cursoSeleccionado: string;
  idCurso: string;
  nota_fisica: number;
  nota_resistencia: number;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditAlumnoComponent>,
    private servicioAlumno: FirestoreService) {
  }

  ngOnInit() {
    this.id = this.data.id;
    this.curso = this.data.nombre;
    this.nota_fisica= this.data.nota_fisica;
    this.nota_resistencia=this.data.nota_resistencia;
    this.servicioAlumno.getAlumno(this.id).subscribe(alumno => {
      this.alumno = alumno.payload.data() as Alumno;
      this.alumno.id = alumno.payload.id;
      this.cursoSeleccionado = this.alumno.curso.id;
    });

    this.servicioAlumno.getCursos().subscribe(
      (cursosSnapshot) => {
        this.cursos = [];
        cursosSnapshot.forEach(
          (cursoData: any) => {
            this.cursos.push({
              id: cursoData.payload.doc.id,
              data: cursoData.payload.doc.data()
            });

          })

      });


  }


  onNoClick(): void {
    console.log(this.cursos);
    this.dialogRef.close();
  }

  editAlumno() {
    console.log(this.alumno.nombre);
    console.log(this.alumno.curso);
    
    this.servicioAlumno.updateAlumno(this.alumno.id,this.alumno);

    this.dialogRef.close();
  }
}
