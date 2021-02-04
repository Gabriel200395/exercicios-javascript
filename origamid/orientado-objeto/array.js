// let array = [["1"], ["3"], [{ numero: 1 }]];
// console.log(
//   array[2].forEach((item) => {
//     console.log(item.numero);
//   })
// );

let li = document.querySelectorAll("li");
console.log(li);

let array = Array.from(li);
console.log(array);

const obj = {
  0: "Gabriel",
  1: "Andre",
  length: 2,
};

const isObj = Array.from(obj);
console.log(isObj);

//Verificar se um arrray
console.log(Array.isArray(array));

//Array.of =  adicionar elementos

//unshifit adicionar objetos no incio
//push adicionar  adicionar no final
//reverse retonar o array invertido
//shift remove o primeiro
//shift remove o final
//pop remove o final
// join ele separar
//slice server para clonar array

let alunos = [
  { media: 1 },
  { media: 1 },
  { media: 5 },
  { media: 1 },
  { media: 1 },
];

let maior = alunos.splice(2, 1);

console.log(maior[0].media);
console.log(
  alunos.forEach((item) => {
    console.log(item);
  })
);

let transporte = ["carro", "caminhão"];
let transporte1 = ["carro", "caminhão"];

console.log(transporte.concat(transporte1));
