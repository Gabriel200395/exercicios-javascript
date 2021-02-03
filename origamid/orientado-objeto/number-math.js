let numero = 59.9;
//numero fracionario
console.log(parseFloat(numero));

//numero fracionario
console.log(parseInt(numero));

// arredonar o numero para o valor total
console.log(numero.toFixed());

// pegar o valor total
console.log(Number(numero));

//transforma em moeda
console.log(
  numero.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
);

// redonda para baixo
console.log(Math.floor(numero));

// redonda para total
console.log(Math.round(numero));

// redonda para cima
console.log(Math.ceil(numero));

let array = [1, 3, 4, 5];

console.log(Math.max(10, 50, 60, 90));
console.log(Math.min(10, 50, 60, 90));
console.log(Math.floor(Math.random() * 100));
console.log(Math.floor(Math.random() * (40 - 20 + 1)) + 20);
