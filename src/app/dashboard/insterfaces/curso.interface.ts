import { AlumnoDto } from './../alumno/dto/alumno.dto';
export interface Curso {
    id: string;
    nombre: string;
    alumnos: AlumnoDto[];
}