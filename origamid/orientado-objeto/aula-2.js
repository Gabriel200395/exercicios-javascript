// const Dom = {
//   seletor: "li",
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     this.element().classList.add("ativar");
//   },
// };

// function Dom(seletor) {
//   this.element = function () {
//     return document.querySelector(seletor);
//   };
//   this.ativar = function (classe) {
//     this.element().classList.add(classe);
//   };
// }

// let domList = new Dom("li");
// domList.ativar("ativo");

//exercicio

// const pessoa = {
//   nome: "nome pessoa",
//   idade: 0,
//   andar() {
//     console.log(this.nome + "andou");
//   },
// };

// function Pessoa() {
//   this.andar = function (nome) {
//     console.log(" 0 " + nome + " andou demais ");
//   };
// }

// let pessoa = new Pessoa();
// pessoa.andar("Gabriel");

function Dom(seletor, el) {
  const elements = document.querySelectorAll(`${(seletor, el)}`);
  this.elements = elements;
  this.addClasse = function (classe) {
    elements.forEach((element) => element.classList.add(classe));
  };
  this.removeClass = function (classe) {
    elements.forEach((element) => element.classList.remove(classe));
  };
}

//selecionar o elemento
let dom = new Dom(".lista", "li");
dom.addClasse("ativo");

let li = new Dom("li");
li.addClasse("ativa-lista");

// dom.removeClass("ativo");
