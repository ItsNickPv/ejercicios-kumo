//Ejercicio 5: Clase Persona
//Realizar un programa que tenga una clase Persona con las siguientes características.
//La clase tendrá como atributos el nombre y la edad de una persona. Implementar los métodos necesarios
//para inicializar los atributos, mostrar los datos e indicar si la persona es mayor de edad o no.

class persona {

    constructor(nombre, edad=0){
        this._nombre = nombre;
        this._edad = edad;
    }

    get edad(){
        return this._edad;
    }

    set edad(nuevaedad){
        if (edad>0){
            this._edad = nuevaedad;
        } else {
            console.log("edad no valida");
        }
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nuevonombre){
        this._nombre = nuevonombre;
    }

    mayoriaedad(){
        if(this.edad>18){
            console.log(`nombre: ${this.nombre}. Tienes ${this.edad}, eres mayor de edad`)
        } else {
            console.log(`nombre: ${this.nombre}. Tienes ${this.edad}, eres menor de edad`)
        }
    }
}