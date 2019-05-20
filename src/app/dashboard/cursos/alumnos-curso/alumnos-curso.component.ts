import { AlumnoDto } from './../../alumno/dto/alumno.dto';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { Curso } from '../../insterfaces/curso.interface';

@Component({
  selector: 'app-alumnos-curso',
  templateUrl: './alumnos-curso.component.html',
  styleUrls: ['./alumnos-curso.component.scss']
})
export class AlumnosCursoComponent implements OnInit {

  curso: Curso;
  alumno: AlumnoDto;
  id: string;
  alumnos: AlumnoDto[];
  firestoreService: any;
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AlumnosCursoComponent>,
    private servicioCurso: FirestoreService) {
  }

  ngOnInit() {
    this.id = this.data.id;
    // this.alumnos=this.servicioCurso.getAlumnosCurso(this.id);
    this.servicioCurso.getAlumnosCurso(this.id).subscribe( als => {
      console.log(als);
      this.alumnos = als;
    });
  } 

  getAlumno(id: string){
    this.servicioCurso.getAlumno(id).subscribe(a=>{
      this.alumno=a.payload.data() as AlumnoDto;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
