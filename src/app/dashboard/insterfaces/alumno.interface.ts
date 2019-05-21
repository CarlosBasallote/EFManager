import { Curso } from './curso.interface';
import { CursoDto } from "../cursos/dto/curso.dto";

export interface Alumno {
    id: string;
    nombre: string;
    curso: Curso;
}