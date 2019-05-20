import { AlumnoDto } from './../../dashboard/alumno/dto/alumno.dto';
import { CursoDto } from '../../dashboard/cursos/dto/curso.dto';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/dashboard/insterfaces/curso.interface';
import { DataRowOutlet } from '@angular/cdk/table';

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
    return this.firestore.collection(url).add({
      nombre: data.nombre,
      alumnos: data.alumnos
    });

  }

  public deleteCat(documentId: string) {
    return this.firestore.collection(url).doc(documentId).delete();
  }

  public deleteAlumno(documentId: string) {
    return this.firestore.collection('alumnos').doc(documentId).delete();
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
  public createAlumno(data: AlumnoDto) {
    console.log(data);
    if (!data.nota_fisica) {
      data.nota_fisica = 0;
    }
    if (!data.nota_resistencia) {
      data.nota_resistencia = 0;
    }
    if (!data.curso) {
      data.curso = null;
    }
    return this.firestore.collection('alumnos').add({
      curso: data.curso,
      nombre: data.nombre,
      nota_fisica: data.nota_fisica,
      nota_resistencia: data.nota_resistencia

    });

  }
  //Obtiene un alumno
  public getAlumno(documentId: string) {
    return this.firestore.collection('alumnos').doc(documentId).snapshotChanges();
  }
  //Obtiene todos los alumnos
  public getAlumnos() {
    return this.firestore.collection('alumnos').snapshotChanges();
  }

  //Obtiene todos los alumnos de
  public getAlumnosCurso(documentId: string): Observable<AlumnoDto[]> {
    console.log(documentId);
    return this.firestore.collection("alumnos", ref => ref.where('curso', '==', documentId)).valueChanges() as Observable<AlumnoDto[]>;
  }

  //Actualiza un alumno
  public updateAlumno(documentId: string, data: any) {
    return this.firestore.collection('alumnos').doc(documentId).set(data);
  }
}