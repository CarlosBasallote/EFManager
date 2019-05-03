import { CursoDto } from '../dto/curso.dto';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-create-curso',
  templateUrl: './create-curso.component.html',
  styleUrls: ['./create-curso.component.scss']
})

export class CreateCursoComponent implements OnInit {
  nombre: string;

  ngOnInit() {
    
  }

  constructor(
    public dialogRef: MatDialogRef<CreateCursoComponent>,
    private servicioCurso: FirestoreService) {}


  onNoClick(): void {
    this.dialogRef.close();
  }

  newCurso() {
    console.log(this.nombre);
    this.servicioCurso.createCurso(new CursoDto(this.nombre));
  }

  
  

}


