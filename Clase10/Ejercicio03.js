// El arreglo de números que vamos a sumar
const numeros = [4, 8, 15, 16, 23, 42];

// Variable acumuladora, empieza en 0
let suma = 0;

// Recorremos cada número del arreglo
for (const numero of numeros) {
  suma = suma + numero; // vamos sumando cada número a la variable suma
}

console.log("La suma total es:", suma);