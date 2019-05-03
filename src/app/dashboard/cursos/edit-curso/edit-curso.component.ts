import { FirestoreService } from './../../../services/firestore/firestore.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CursoDto } from '../dto/curso.dto';
import { Curso } from '../../insterfaces/curso.interface';

@Component({
  selector: 'app-edit-curso',
  templateUrl: './edit-curso.component.html',
  styleUrls: ['./edit-curso.component.scss']
})
export class EditCursoComponent implements OnInit {

  nombre:string;
  curso:Curso;
  id:string;

  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditCursoComponent>,
    private servicioCurso: FirestoreService) {
    }

    ngOnInit() {
    this.id= this.data.id;
    this.servicioCurso.getCurso(this.id).subscribe(curso =>{
      this.curso = curso.payload.data() as Curso;
      this.curso.id = curso.payload.id;
    });
    }


  onNoClick(): void {
    this.dialogRef.close();
  }

  editCurso() {
    console.log(this.curso.nombre);
    this.servicioCurso.updateCurso(this.id,this.curso);
    this.dialogRef.close();
  }


}
