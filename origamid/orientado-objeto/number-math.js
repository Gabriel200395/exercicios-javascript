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

console.log(Math.max(10, 50, 60, 90));
console.log(Math.min(10, 50, 60, 90));
console.log(Math.floor(Math.random() * 100));
console.log(Math.floor(Math.random() * (40 - 20 + 1)) + 20);

// exercicios

let aletorio = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;
console.log(aletorio);

let array = [{ numero: 1 }, { numero: 50 }, { numero: 80 }, { numero: 70 }];
array.forEach((item) => {
  const n = item.numero;
  const numeroMax = Math.min(n);
  console.log(numeroMax);
});

let Valores = ["R$ 59.99", "R$ 120.99", "R$ 60.79", "R$ 17.90"];

function formataNumero() {
  let total = 0;
  Valores.forEach((item) => {
    const numeroLimpo = +item.replace("R$", "");
    const arrNumber = Math.round(numeroLimpo);
    total += arrNumber;
  });
  console.log(total);
}

formataNumero();
