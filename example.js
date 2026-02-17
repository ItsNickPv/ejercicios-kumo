//eliminar datos duplicados sin set
let array = [1, 2, 3, 2, 4, 5, 1, 6, 3];
let uniqueArray = array.filter((item, index) => {
  return array.indexOf(item) === index;
});
console.log(uniqueArray);




//Determina cuál es el número que más veces se repite, Muestra también cuántas veces aparece.
let array2 = [4, 2, 7, 4, 8, 2, 4, 2, 2];
let count = {};
array2.forEach(num => {
  count[num] = (count[num] || 0) + 1;
});
let maxCount = 0;
let mostFrequent = Number(num);
for (let num in count) {
  if (count[num] > maxCount) {
    maxCount = count[num];
    mostFrequent = num;
  }
}
console.log(`El número que más se repite es ${mostFrequent} y aparece ${maxCount} veces.`);

//suma acumulada
let array3 = [1, 2, 3, 4];
let accumulated = array3.reduce((acc, num, index) => {
  acc.push((acc[index - 1] || 0) + num);
  return acc;
}, []);
console.log(accumulated);


//calcular vocales
let frase = prompt("ingrese la frase: ");
let vocales = frase.match(/[aeiouAEIOU]/g);
let cantidadVocales = vocales ? vocales.length : 0;
console.log(`La cantidad de vocales en la frase es: ${cantidadVocales}`);

//Pide una oración y muestra cuál es la palabra más larga.
let oracion = prompt("Ingrese una oración: ");
let palabras = oracion.split(" ");
let palabraMasLarga = palabras.reduce((longest, current) => {
  return current.length > longest.length ? current : longest;
}   , "");
console.log(`La palabra más larga es: ${palabraMasLarga}`);

//Pide una contraseña y valida que: Tenga al menos 8 caracteres, Tenga al menos un número, Tenga al menos una letra.
//Debe mostrar: "Contraseña válida", o qué condición no cumple.
let contraseña = prompt("Ingrese una contraseña: ");
let esValida = true;
let mensaje = "Contraseña válida";
if (contraseña.length < 8) {
  esValida = false;
  mensaje = "La contraseña debe tener al menos 8 caracteres.";
}
if (!/\d/.test(contraseña)) {
  esValida = false;
  mensaje = "La contraseña debe tener al menos un número.";
}
if (!/[a-zA-Z]/.test(contraseña)) {
  esValida = false;
  mensaje = "La contraseña debe tener al menos una letra.";
}
console.log(mensaje);
