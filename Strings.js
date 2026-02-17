//1. Escribir un programa que pregunte el nombre completo del usuario en la consola y después muestre por pantalla
// el nombre completo del usuario tres veces, una con todas las letras minúsculas, otra con todas las letras mayúsculas
// y otra solo con la primera letra del nombre y de los apellidos en mayúscula. El usuario puede introducir su nombre
// combinando mayúsculas y minúsculas como quiera.
let nombreCompleto = prompt("Ingrese su nombre:");

let minusculas = nombreCompleto.toLowerCase();
console.log("En minuscula: " + minusculas);

let mayusculas = nombreCompleto.toUpperCase();
console.log("En mayuscula: " + mayusculas);

let formatoTitulo = nombreCompleto
  .toLowerCase()
  .split(" ")
  .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
  .join(" ")

console.log("Primera letra en mayúscula: " + formatoTitulo);

//2. Escribir un programa que pregunte el nombre del usuario en la consola y después de que el
//usuario lo introduzca muestre por pantalla <NOMBRE> tiene <n> letras, donde <NOMBRE> es el nombre de usuario
//en mayúsculas y <n> es el número de letras que tienen el nombre.
let user = prompt("Ingrese su nombre");
let mayus = user.toUpperCase();
let cant = user.length;
console.log("nombre: " + mayus + " tiene " + cant + "letras");

//3. Los teléfonos de una empresa tienen el siguiente formato prefijo-número-extension
//donde el prefijo es el código del país +34, y la extensión tiene dos dígitos (por ejemplo +34-913724710-56).
//Escribir un programa que pregunte por un número de teléfono con este formato y muestre
// por pantalla el número de teléfono sin el prefijo y la extensión.
const telefono = prompt("ingrese su telefono");
const partes = telefono.split("-");
const numero = partes[1];
console.log("Número sin prefijo ni extensio:", numero);

//4. Escribir un programa que pida al usuario que introduzca una frase en la consola y muestre por pantalla la frase invertida.
const frase = prompt("Introduce una frase:");

const fraseInvertida = frase
  .split("")      
  .reverse()      
  .join("");      
console.log("Frase invertida:", fraseInvertida);

//5. Escribir un programa que pida al usuario que introduzca una frase en la consola y una vocal,
// y después muestre por pantalla la misma frase pero con la vocal introducida en mayúscula.
const frase2 = prompt("Introduce una frase:");
const vocal = prompt("Introduce una vocal:");

const resultado = frase2
    .split("")
    .map(letra => letra.toLowerCase() === vocal.toLowerCase()
    )
    .join("");

  console.log("Resultado:", resultado);

//6. Escribir un programa que pregunte el correo electrónico del usuario en la consola y
// muestre por pantalla otro correo electrónico con el mismo nombre (la parte delantera de la arroba @) pero con dominio ceu.es.
const correo = prompt("Introduce tu correo:");

if (correo && correo.includes("@")) {
  const nombre = correo.split("@")[0];
  const nuevoCorreo = nombre + "@ceu.es";
  console.log("Nuevo correo:", nuevoCorreo);
} else {
  console.log("Correo inválido.");
}

//7. Escribir un programa que pregunte al usuario la fecha de su nacimiento en formato dd/mm/aaaay muestra por pantalla,
// el día, el mes y el año. Adaptar el programa anterior para que también funcione cuando
// el día o el mes se introduzcan con un solo carácter.
const fecha = prompt("Introduce tu fecha (dd/mm/aaaa):");

if (fecha && fecha.includes("/")) {
  const partes = fecha.split("/");

  if (partes.length === 3) {
    const dia = partes[0];
    const mes = partes[1];
    const año = partes[2];

    console.log("Día:", dia);
    console.log("Mes:", mes);
    console.log("Año:", año);
  } else {
    console.log("Formato incorrecto.");
  }
}

//8. Escribir un programa que pregunte por consola por los productos de una cesta de la compra,
//separados por comas, y muestre por pantalla cada uno de los productos en una línea distinta.
const productos = prompt("Introduce productos separados por coma:");

if (productos) {
  const lista = productos.split(",");

  lista.forEach(producto => {
    console.log(producto.trim());
  });
}

//9. Que lea una oración desde el teclado y determine cuántas palabras tiene la oración.
const oracion = prompt("Introduce una oración:");

if (oracion) {
  const palabras = oracion.trim().split(/\s+/);
  console.log("Cantidad de palabras:", palabras.length);
}

//10. Crear función que determine si un string numérico es capicúa EJ: “12321”.
function esCapicua(numero2) {
  const invertido = numero2.split("").reverse().join("");
  return numero2 === invertido;
}

const numero2 = prompt("Introduce un número:");

if (numero2) {
  console.log("¿Es capicúa?", esCapicua(numero2));
}
