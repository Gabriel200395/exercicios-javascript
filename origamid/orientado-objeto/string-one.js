const arrayPreco = [
  {
    descricao: "Taxa de pagamento de luz",
    valor: "R$ 40",
  },
  {
    descricao: "Valor do Tenis",
    valor: "R$ 50.00",
  },
  {
    descricao: "Valor da Camisa ",
    valor: "R$ 60.00",
  },
];

let valorTaxa = 0;
let recebimento = 0;
arrayPreco.forEach((item) => {
  const numeroLimpo = +item.valor.replace("R$", " ");
  if (item.descricao.slice(0, 5) === "Valor") {
    valorTaxa += numeroLimpo;
  } else if (item.descricao.slice(0, 4) === "Taxa") {
    recebimento += numeroLimpo;
  }
});
console.log(valorTaxa);
console.log(recebimento);

// const somarValores = arrayPreco.reduce((total, item) => {
//   return item.valor + total;
// }, 0);

// console.log(somarValores);

// const ordenando = arrayPreco.sort((a, b) => (a.valor > b.valor ? 1 : -1));
// const menor = ordenando[0];
// const maior = ordenando[ordenando.length - 1];

// console.log(maior);

// const maiorValor = arrayPreco.reduce((total, item) => {
//   if (total.valor > item.valor) {
//     item = total;
//   }
//   return item;
// });

// const menorValor = arrayPreco.reduce((total, item) => {
//   if (total.valor < item.valor) {
//     item = total;
//   }
//   return item;
// });

// console.log(maiorValor);
// console.log(menorValor);

const taxas = ["     taxa de servico", "taxa de pagamento"];
let total = 0;
taxas.forEach((item) => {
  item = item.trim().toLocaleUpperCase().slice(0, 4);

  if (item === "TAXA") {
    total++;
  }
});

console.log(total);
