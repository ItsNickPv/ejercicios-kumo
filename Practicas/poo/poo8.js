//Ejercicio 8: Clase Calculadora
//Realizar un programa en el cual se declaran dos valores enteros por teclado utilizando el método constructor.
//Calcular después la suma, resta, multiplicación y división. Utilizar un método para cada una e imprimir los
//resultados obtenidos. Llamar a la clase Calculadora.

class Calculadora {

    constructor(valor1, valor2){
        this._valor1 = valor1;
        this._valor2 = valor2;
    }

    get valor1(){
        return this._valor1;
    }

    set valor1(nuevoValor1){
        this._valor1 = nuevoValor1;
    }

    get valor2(){
        return this._valor2;
    }

    set valor2(nuevoValor2){
        this._valor2 = nuevoValor2;
    }

    sumar(){
        const sumaTotal = this._valor1 + this._valor2;
        console.log(`La suma de ${this._valor1} + ${this._valor2} es ${sumaTotal}`);
    }

    restar(){
        const restaTotal = this._valor1 - this._valor2;
        console.log(`La resta de ${this._valor1} - ${this._valor2} es ${restaTotal}`);
    }

    multiplicar(){
        const multiplicacionTotal = this._valor1 * this._valor2;
        console.log(`La multiplicación de ${this._valor1} x ${this._valor2} es ${multiplicacionTotal}`);
    }

    dividir(){
        if (this._valor2 === 0) {
            console.log("No se puede dividir entre 0.");
        } else {
            const divisionTotal = this._valor1 / this._valor2;
            console.log(`La división de ${this._valor1} ÷ ${this._valor2} es ${divisionTotal}`);
        }
    }
}

const num1 = parseInt(prompt("Ingrese el primer valor: "));
const num2 = parseInt(prompt("Ingrese el segundo valor: "));

const calculadora = new Calculadora(num1, num2);

calculadora.sumar();
calculadora.restar();
calculadora.multiplicar();
calculadora.dividir();
