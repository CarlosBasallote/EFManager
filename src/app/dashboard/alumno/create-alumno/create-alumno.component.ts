import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import {AlumnoDto} from '../dto/alumno.dto';

@Component({
  selector: 'app-create-alumno',
  templateUrl: './create-alumno.component.html',
  styleUrls: ['./create-alumno.component.scss']
})
export class CreateAlumnoComponent implements OnInit {
  nombre: string;
  nota_fisica: number;
  nota_resistencia: number;

  constructor(public dialogRef: MatDialogRef<CreateAlumnoComponent>,
    private servicioAlumno: FirestoreService) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  newAlumno() {
    
    console.log(this.nombre);
    console.log(this.nota_fisica);
    console.log(this.nota_resistencia);
    this.servicioAlumno.createAlumno(new AlumnoDto(this.nombre,this.nota_fisica,this.nota_resistencia));
  }


}
