/*Métodos a utilizar: push, pop, map, find, findIndex, filter, foreach, reduce, etc.*/

//Ejercicio 1
const array1 = [10, 20, 30, 40, 50];
array1.forEach((num, index) => {
  console.log(`Posición ${index}: ${num}`);
});

//Ejercicio 2
const array2 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const media = array2.reduce((acc, num) => acc + num, 0) / array2.length;
console.log(`La media de los valores del array es: ${media}`);

//Ejercicio 3
const array3 = [4, 7, 9, 7, 2, 7];
const numeroBuscado = 7;
const posiciones = [];

array3.forEach((num, index) => {
  if (num === numeroBuscado) {
    posiciones.push(index);
  }
});

if (posiciones.length > 0) {
  console.log("Encontrado en posiciones:", posiciones);
} else {
  console.log("No encontrado");
}

//Ejercicio 4
const notas = [10, 15, 8, 20, 5, 18, 12, 9];
const aprobados = notas.filter(nota => nota >= 11);
const desaprobados = notas.filter(nota => nota < 11);

const promedioAprobados = aprobados.reduce((a, b) => a + b, 0) / aprobados.length || 0;
const promedioDesaprobados = desaprobados.reduce((a, b) => a + b, 0) / desaprobados.length || 0;

console.log("Cantidad aprobados:", aprobados.length);
console.log("Promedio aprobados:", promedioAprobados);

console.log("Cantidad desaprobados:", desaprobados.length);
console.log("Promedio desaprobados:", promedioDesaprobados);

//Ejercicio 5
const vector = [12, 45, 7, 89, 23];

const mayor = Math.max(...vector);
const menor = Math.min(...vector);
const mediaVector = vector.reduce((a, b) => a + b, 0) / vector.length;

console.log("Mayor:", mayor);
console.log("Menor:", menor);
console.log("Media:", mediaVector);

//Ejercicio 6
const stringNumeros = "12345";
const arrayNumeros = stringNumeros.split("").map(num => Number(num));
console.log(arrayNumeros);

//Ejercicio 7
const numeros = [2, 4, 6, 8];

const multiplicados = numeros.map(num => num * 2);

console.log(multiplicados);

//Ejercicio 8
const N = 7; // debe ser impar
const arrayImpar = [];

for (let i = 0; i < N; i++) {
  arrayImpar.push(Math.floor(Math.random() * 100));
}

console.log("Array:", arrayImpar);

const posicionCentral = Math.floor(arrayImpar.length / 2);
console.log("Elemento central:", arrayImpar[posicionCentral]);

//Ejercicio 9
const alumnos = [
  { nombre: "Juan", edad: 18 },
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 17 },
  { nombre: "María", edad: 22 }
];

// Mayores de edad
const mayores = alumnos.filter(alumno => alumno.edad >= 18);
console.log("Mayores de edad:", mayores);

// Edad mayor
const edadMayor = Math.max(...alumnos.map(alumno => alumno.edad));

const alumnosMayorEdad = alumnos.filter(alumno => alumno.edad === edadMayor);

console.log("Edad mayor:", edadMayor);
console.log("Alumnos con mayor edad:", alumnosMayorEdad);

//Ejercicio 10
const matriz = [];

for (let i = 0; i < 5; i++) {
  const fila = [];
  for (let j = 0; j < 5; j++) {
    fila.push(Math.floor(Math.random() * 10));
  }
  matriz.push(fila);
}

console.log("Matriz:");
console.table(matriz);

// Suma filas
matriz.forEach((fila, i) => {
  const sumaFila = fila.reduce((a, b) => a + b, 0);
  console.log(`Suma fila ${i}:`, sumaFila);
});

// Suma columnas
for (let col = 0; col < 5; col++) {
  let sumaCol = 0;
  for (let fila = 0; fila < 5; fila++) {
    sumaCol += matriz[fila][col];
  }
  console.log(`Suma columna ${col}:`, sumaCol);
}

//Ejercicio 11
function llenarArray(tamano, numero) {
  const array = [];
  for (let i = 1; i <= tamano; i++) {
    array.push(numero * i);
  }
  return array;
}

function mostrarArray(array) {
  array.forEach(num => console.log(num));
}

const resultado = llenarArray(5, 3);
mostrarArray(resultado);
