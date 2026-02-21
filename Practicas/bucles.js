/*1. Bucle While Decreciente Un bucle while que cuente desde 50 hasta 40 (fíjate que en este caso es decreciente).*/
let i = 50;
while (i >= 40) {
    console.log(i);
    i--;
}

/*2. Doble del Contador Un bucle while que a partir de una variable “contador” que toma valores de 1 a 5,
muestre por pantalla el doble del valor de “contador”, es decir, que muestre 2, 4, 6, 8, 10.*/
let contador = 1;
while(contador <= 5) {
    console.log(contador * 2);
    contador++;
}

/*3. Suma de los Primeros Cien Números Calcular la suma de los primeros cien números con un ciclo.*/
let suma = 0;
let num = 1;
while (num<=100){
    suma += num;
    num++;
}
console.log(suma);

/*4. Factorial de 1 a 10 Construir un programa que calcule y visualice por pantalla el factorial de
todos los valores numéricos enteros entre 1 y 10.*/
let n = 1;
while(n <= 10) {
    let factorial = 1;
    let i = 1;
    while (i <= n) {
        factorial *= i;
        i++;
    }
    console.log("factorial de " + n + " = " + factorial);
    n++;
}

/*5. Suma de Serie Escribir un programa que dado un número entero positivo n,
calcule la suma de la siguiente serie: 1 + 1/2 + 1/3 + 1/4 + 1/5 + … + 1/n.*/
let nSerie = parseInt(prompt("ingrese un numero"));
let sumaserie = 0;
let iserie = 1;

while(iserie <= nSerie){
    sumaserie += 1 /iserie;
    iserie++;
}
console.log("La suma de la serie es " + sumaserie);

/*6. Números de Fibonacci Escribir un programa que calcule los primeros ‘n’ números de Fibonacci.
Los números de Fibonacci comienzan con 0 y 1, y cada término siguiente es la suma de los anteriores: 0, 1, 2, 3, 5, 8, 13, 21.*/
let nFibonacci = parseInt(prompt("ingrese un numero"));
let a = 0;
let b = 1;
let count = 0;
while (count < nFibonacci) {
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
    count++;
}

/*7. Notas Mayores o Iguales a 3.0 Escribir un programa que, dadas 5 notas finales,
determine cuántas notas fueron mayores o iguales a 3.0.*/
let z = 1;
let nota;
let mayores = [];

while (z <= 5) {
    nota = parseFloat(prompt("ingrese la nota " + z + ": "));
    if (nota > 3.0 ) {
        mayores.push(nota);
    }
    z++;
}
console.log("notas mayores a 3:");
for (let i  = 0; i < mayores.length; i++) {
    console.log(mayores[i])
}

/*8. Factorial de un Número Desarrollar un programa que calcule el factorial de un número entero positivo.
El factorial de un número es el producto de todos los números enteros positivos desde 1 hasta el número en cuestión.*/
let k = parseInt(prompt("Ingrese el numero: "));

while(k <= 10) {
    let factorial = 1;
    let i = 1;
    while (i <= k) {
        factorial *= i;
        i++;
    }
    console.log("factorial de " + k + " = " + factorial);
    k++;
}

/*9. Números Pares entre Dos Números Escribir un programa que imprima
todos los números pares entre dos números que se le pida al usuario.*/
let num1 = parseInt(prompt("Ingrese el numero 1:"));
let num2 = parseInt(prompt("Ingrese el numero 2:"));

let menor = Math.min(num1, num2);
let mayor = Math.max(num1, num2);

let v = menor;
while (v <= mayor) {
    if (v % 2 === 0) {
        console.log(v);
    }
    v++;
}

/*10. Ahorro Anual Realizar un algoritmo para determinar cuánto ahorrará una persona en un año,
si al final de cada mes deposita cantidades variables de dinero; además, se quiere saber cuánto lleva ahorrado cada mes.*/
let mes = 1;
let ahorroTotal = 0;
while (mes <= 12) {
    let deposito = parseFloat(prompt("Ingrese el ahorro de " + mes + ":"));
    
    ahorroTotal += deposito;
    console.log("Ahorro acumulado hasta " + mes + ": $" + ahorroTotal);
    mes++;
}
console.log("El ahorro total en el año es: $" + ahorroTotal);
