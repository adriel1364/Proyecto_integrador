const numeros = [3, 7, 12, 5, 2];

const cuadrados = numeros.map(num => num * num);
console.log(cuadrados); // Resultado: [9, 49, 144, 25, 4]

const mayoresQueCinco = numeros.filter(num => num > 5);
console.log(mayoresQueCinco); // Resultado: [7, 12]

const esPar = num => num % 2 === 0 ? "Par" : "Impar";
console.log(esPar(7)); // Resultado: "Impar"
console.log(esPar(12)); // Resultado: "Par"
