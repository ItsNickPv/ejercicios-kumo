//Ejercicio 4: Clase Alumno
//Realizar un programa que conste de una clase llamada Alumno que tenga como atributos el nombre y la nota del alumno.
//Definir los métodos para inicializar sus atributos, imprimirlos y mostrar un mensaje con el resultado
//de la nota y si ha aprobado o no.

class alumno {
    
    constructor(nombre, nota = 0) {
    this._nombre = nombre;
    this._nota = nota;
    }

    get nota(){
        return this._nombre;
    }

    set nota(nuevanota){
        if(nuevanota>0){
            this._nota = nuevanota;
        } else {
            console.log("nota no valida.");
        }
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nuevonombre){
        this._nombre = nuevonombre;
    }

    imprimir(){
        console.log(`Nombre: ${this._nombre}, Nota: ${this._nota}`);
    }

    resultado(){
        if(this._nota >= 5){
            console.log("Aprobado");
        } else {
            console.log("Reprobado");
        }
    }

}
