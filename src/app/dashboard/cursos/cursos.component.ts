import { CursoDto } from './dto/curso.dto';
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { CreateCursoComponent } from './create-curso/create-curso.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  public cursos=[];

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

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateCursoComponent, {
      width: '250px'
    });

  }
}