export class AlumnoDto{
    curso: string;
    nombre: string;
    nota_fisica:number;
    nota_resistencia:number;


    constructor(curso:string,nombre: string, nota_fisica: number, nota_resistencia: number) {
        this.curso=curso;
        this.nombre = nombre;
        this.nota_fisica = nota_fisica;
        this.nota_resistencia=nota_resistencia;
    }
 
    
 

}