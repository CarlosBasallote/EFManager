import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent implements OnInit {

  public alumnos=[];

  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.firestoreService.getAlumnos().subscribe(
      (cursosSnapshot)=>{
        this.alumnos=[];
        cursosSnapshot.forEach(
          (cursoData: any)=>{
            this.alumnos.push({
              id: cursoData.payload.doc.id,
              data: cursoData.payload.doc.data()
            });
          })
      });
  }


}
