import { Component, OnInit, Inject } from '@angular/core';
import { Nota } from '../../insterfaces/nota.interface';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-nota',
  templateUrl: './edit-nota.component.html',
  styleUrls: ['./edit-nota.component.scss']
})
export class EditNotaComponent implements OnInit {

  nombre:string;
  nota:Nota;
  nota_resistencia: number;
  nota_fisico: number;
  id:string;

  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditNotaComponent>,
    private servicioAlumno: FirestoreService) {
    }

    ngOnInit() {
    this.id= this.data.id;
    this.servicioAlumno.getAlumno(this.id).subscribe(nota =>{
      this.nota = nota.payload.data() as Nota;
      this.nota.id = nota.payload.id;
    });
    }


  onNoClick(): void {
    this.dialogRef.close();
  }

  editNota() {
    console.log(this.nota.nota_fisica);
    console.log(this.nota.nota_resistencia);
    this.servicioAlumno.updateAlumno(this.id,this.nota);
    this.dialogRef.close();
  }

}
