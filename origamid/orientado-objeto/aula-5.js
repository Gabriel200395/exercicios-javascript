const nome = "Gabriel";
// console.log(nome.length);
// console.log(nome[0]);
// console.log(nome[nome.length - 1]);

//metados de strings
console.log(nome.charAt(0));
console.log(nome.charAt(nome.length - 1));

//metado de concatenar

const linguagem = "Java Script";
const livro = " Eloquent ";

// const autor = livro + linguagem;

const livroAutor = livro.concat(linguagem);

const listaFrutas = "melancia, banana, maçã";

let fruta = "Banana";

console.log(listaFrutas.includes("banana"));

//verificar se existe ou não no começo
console.log(fruta.startsWith("Ba"));

//verificar se existe ou não no final
console.log(fruta.endsWith("na"));

const transacao1 = "ABRIEL FEZ UMA TRANSAÇÃO DE 1500";

//pega o inicio do elemento e o final
console.log(transacao1.slice(0, 7));

// let frutas = ["maca", "banana"];

// function validaFrutas(array, fruta) {
//   if (array.indexOf(fruta) === -1) {
//     console.log("não existe esse fruta");
//   } else if (array.indexOf(fruta) > -1) {
//     console.log("fruta jae existente");
//   }
// }

// validaFrutas(frutas, "banana");

const li = "li";
li.repeat(5);

let preco = "1200,00";
console.log(preco.replace(",", "."));

const nome1 = "Gabriel";

console.log(nome1.toLocaleLowerCase() === "gabriel");
