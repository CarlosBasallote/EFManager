import {AlumnoDto} from '../../alumno/dto/alumno.dto';

export class CursoDto{
    nombre: string;
    alumnos: AlumnoDto[];

    constructor(nombreCurso: string) {
        this.nombre = nombreCurso;
        this.alumnos = [];
    }

    
}
