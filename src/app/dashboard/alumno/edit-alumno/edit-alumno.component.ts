import { AlumnoDto } from './../dto/alumno.dto';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { Alumno } from '../../insterfaces/alumno.interface';

@Component({
  selector: 'app-edit-alumno',
  templateUrl: './edit-alumno.component.html',
  styleUrls: ['./edit-alumno.component.scss']
})
export class EditAlumnoComponent implements OnInit {

  nombre:string;
  alumno:Alumno;
  id:string;

  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditAlumnoComponent>,
    private servicioAlumno: FirestoreService) {
    }

    ngOnInit() {
    this.id= this.data.id;
    this.servicioAlumno.getAlumno(this.id).subscribe(alumno =>{
      this.alumno = alumno.payload.data() as Alumno;
      this.alumno.id = alumno.payload.id;
    });
    }


  onNoClick(): void {
    this.dialogRef.close();
  }

  editAlumno() {
    console.log(this.alumno.nombre);
    this.servicioAlumno.updateAlumno(this.id,this.alumno);
    this.dialogRef.close();
  }
}
