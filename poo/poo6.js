//Ejercicio 6: Clase Triángulo
//Desarrollar un programa que cargue los datos de un triángulo. Implementar una clase con los métodos
//para inicializar los atributos, imprimir el valor del lado con un tamaño mayor y el tipo de triángulo que es
//(equilátero, isósceles o escaleno).

class triangulo {

    constructor(lado1, lado2, lado3){
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    ladoMayor() {
        const mayor = Math.max(this.lado1, this.lado2, this.lado3);
        console.log("El lado mayor es:", mayor);
    }

    tipoTriangulo() {
        if (this.lado1 === this.lado2 && this.lado2 === this.lado3) {
            console.log("Es un triángulo equilátero");
        } else if (
            this.lado1 === this.lado2 ||
            this.lado1 === this.lado3 ||
            this.lado2 === this.lado3
        ){
        console.log("Es un triángulo isósceles");
        }else {
        console.log("Es un triángulo escaleno");
        }
    }
}
