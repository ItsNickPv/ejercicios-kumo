// Determinar si un número es par o no.
function verificarParImpar(num) {
    if (num % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}

// Media Aritmética de 2 Números Hacer un programa que realice la media aritmética de 2 números.
function Calcularmedia(a1, a2) {
    let mediaaritmetica = (a1 + a2) / 2;
    console.log("La media aritmética es: " + mediaaritmetica);
}

/* Menú de Operaciones Hacer un programa que muestre un menú con las opciones sumar, restar,
multiplicar y dividir, el programa solicitará una opción y realizará la tarea elegida, se debe usar procedimientos.*/
function calculadora(a, b) {
    let suma = a + b;
    let resta = a - b;
    let multiplicacion = a * b;
    let division = a / b;
    
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
}

/* Número en Letras Hacer un programa que pida por pantalla un número del 1 al 10 y mediante un
procedimiento muestre por pantalla el número escrito en letras.*/
function numeroEnLetras(num) {
    switch (num) {
        case 1:
            return("Uno");
            break;
        case 2:
            return("Dos");
            break;
        case 3:
            return("Tres");
            break;
        case 4:
            return("Cuatro");
            break;
        case 5:
            return("Cinco");
            break;
        case 6:
            return("Seis");
            break;
        case 7:
            return("Siete");
            break;
        case 8:
            return("Ocho");
            break;
        case 9:
            return("Nueve");
            break;
        case 10:
            return("Diez");
            break;
        default:
            return(0);
    }
}

/* Conversión de Temperatura Hacer un programa que pida por pantalla una temperatura en grados Celsius,
muestre un menú para convertirlos a Fahrenheit o Kelvin y muestre el equivalente por pantalla, utilizando funciones.
    * Celsius a Fahrenheit: F = (9*C)/5 + 32;
    * Celsius a Kelvin: K = C + 273.15;
*/
function grados(celcius){
    let gradosFahrenheit = (celcius * 9/5) + 32;
    let gradoskelvin = (celcius + 273.15);
    console.log("La temperatura en grados Fahrenheit es: " + gradosFahrenheit);
    console.log("La temperatura en grados kelvin es: " + gradoskelvin);
}

/*Tabla de Multiplicar hasta el 20 Hacer un programa que muestre una tabla de multiplicar hasta el 20 de un número
cualquiera por pantalla, el número se pedirá en el programa principal. Usar procedimiento.*/
function Multiplicar(digito) {
    let multi = 1;

    while (multi <= 20) {
        let total = digito * multi;
        console.log(digito + " x " + multi + " = " + total);
        multi++;
    }
}

/* Orden Ascendente Hacer un programa que muestre 3 números ordenados ascendentemente,
utilizando un procedimiento para cada operación.*/
function ordenarAsc(a, b, c) {
    let menor, medio, mayor;

    if (a <= b && a <= c) {
        menor = a;
        if (b <= c) {
            medio = b;
            mayor = c;
        } else {
            medio = c;
            mayor = b;
        }
    } else if (b <= a && b <= c) {
        menor = b;
        if (a <= c) {
            medio = a;
            mayor = c;
        } else {
            medio = c;
            mayor = a;
        }
    } else {
        menor = c;
        if (a <= b) {
            medio = a;
            mayor = b;
        } else {
            medio = b;
            mayor = a;
        }
    }

    console.log("Orden ascendente:");
    console.log(menor, medio, mayor);
}
ordenarAsc(n1, n2, n3);

/* Orden Descendente Hacer un programa que muestre 3 números ordenados descendentemente,
utilizar un procedimiento para cada operación.*/
function ordenarDesc(a, b, c) {
    let menor, medio, mayor;

    if (a <= b && a <= c) {
        menor = a;
        if (b <= c) {
            medio = b;
            mayor = c;
        } else {
            medio = c;
            mayor = b;
        }
    } else if (b <= a && b <= c) {
        menor = b;
        if (a <= c) {
            medio = a;
            mayor = c;
        } else {
            medio = c;
            mayor = a;
        }
    } else {
        menor = c;
        if (a <= b) {
            medio = a;
            mayor = b;
        } else {
            medio = b;
            mayor = a;
        }
    }

    console.log("Orden descendente:");
    console.log(mayor, medio, menor);
}