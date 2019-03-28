import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  public cursos=[];

  constructor(
    private firestoreService: FirestoreService
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

}
