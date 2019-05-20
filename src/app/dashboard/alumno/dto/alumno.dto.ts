export class AlumnoDto{
    curso: string;
    nombre: string;
    nota_fisica:number;
    nota_resistencia:number;


    constructor(nombre: string, nota_fisica: number, nota_resistencia: number) {
        this.nombre = nombre;
        this.nota_fisica = nota_fisica;
        this.nota_resistencia=nota_resistencia;
    }
 
    
 

}