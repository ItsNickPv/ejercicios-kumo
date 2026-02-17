// Serie Fibonacci con Recursividad Serie Fibonacci con Recursividad: 1.1.2.3.5.8…
function fibonacci(n) {
    if (n <= 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
function mostrarFibonacci(n) {
    for (let i = 1; i <= n; i++) {
        console.log(fibonacci(i));
    }
}

// Imprimir Números con Recursividad Consideremos una función que recibe un número
// n e imprime los números del n al 1 con recursividad.
function imprimir(n) {
    if (n === 0) {
        return;
    }
    console.log(n);
    imprimir(n - 1);
}


// Número Entero a Binario con Recursividad Pasar de número entero a número binario con Recursividad.
function decimalABinario(num) {
  if (num === 0) {
    return "";
  }
  return decimalABinario(Math.floor(num / 2)) + (num % 2);
}

// Invertir un Número Entero con Recursividad Invertir un número entero con Recursividad.
function invertirNumero(n, invertido = 0) {
    if (n === 0) {
        return invertido;
    }

    invertido = (invertido * 10) + (n % 10);
    return invertirNumero(Math.floor(n / 10), invertido);
}

//Factorial con recursividad
const factorial = (num) => {
    if(num == 0) return 1;
    return num * factorial(num - 1);
}

//imprimir un Numero hasta 0
function nums(x) {
    if(x === 0)
        return;
    console.log(x);
    nums(x - 1);
}

