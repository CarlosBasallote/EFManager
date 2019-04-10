import { CursoDto } from '../../dashboard/cursos/dto/curso.dto';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

const url = '/cursos';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore
    ) { }

  //Crea un nuevo curso
  public createCurso(data: CursoDto) {
    console.log(data);
    return this.firestore.collection(url).add(data);

  }
  //Obtiene un curso
  public getCurso(documentId: string) {
    return this.firestore.collection('cursos').doc(documentId).snapshotChanges();
  }
  
  //Obtiene todos los cursos
  public getCursos() {
    return this.firestore.collection('cursos').snapshotChanges();
  }
  //Actualiza un curso
  public updateCurso(documentId: string, data: any) {
    return this.firestore.collection('cursos').doc(documentId).set(data);
  }

  //Crea un nuevo alumno
  public createAlumno(data: {AlumnoDto}) {
    return this.firestore.collection('alumnos').add(data);
  }
  //Obtiene un alumno
  public getAlumno(documentId: string) {
    return this.firestore.collection('alumnos').doc(documentId).snapshotChanges();
  }
  //Obtiene todos los alumnos
  public getAlumnos() {
    return this.firestore.collection('alumnos').snapshotChanges();
  }
  //Actualiza un alumno
  public updateAlumno(documentId: string, data: any) {
    return this.firestore.collection('alumnos').doc(documentId).set(data);
  }
}

