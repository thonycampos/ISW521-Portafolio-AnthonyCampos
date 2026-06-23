// Recorremos los números del 1 al 30
for (let i = 1; i <= 30; i++) {

  // Si el número es múltiplo de 3 Y de 5 al mismo tiempo
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");

  // Si solo es múltiplo de 3
  } else if (i % 3 === 0) {
    console.log("Fizz");

  // Si solo es múltiplo de 5
  } else if (i % 5 === 0) {
    console.log("Buzz");

  // Si no es múltiplo de ninguno, imprimimos el número normal
  } else {
    console.log(i);
  }

}