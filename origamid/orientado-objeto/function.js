function Li(seletor, el) {
  this.element = document.querySelector(seletor);
  this.creatElement = document.createElement(el);
}

Li.prototype.ativo = function (classe) {
  this.element.classList.add(classe);
};

Li.prototype.add = function () {
  this.element.appendChild(this.creatElement);
};

const li = {
  element: document.querySelector("li"),
  creatElement: document.createElement("p"),
};

Li.prototype.ativo.call(li, "ativar");
Li.prototype.add.call(li);

// const li = document.querySelectorAll("li");

//aqui ele esta fazendo um apontamento para o this

// const filtro = Array.prototype.filter.call(li, (item) => {
//   let createEl = document.createElement("p");
//   return item.appendChild(createEl);
// });

// console.log(filtro);

// const li = document.querySelectorAll("li");
// const array = Array.from(li);

// const filtro = array.filter((item) => {
//   let createEl = document.createElement("p");
//   return item.appendChild(createEl);
// });

// console.log(filtro);

// const numeros = [1, 2, 4, 5, 89];
// console.log(Math.max.apply(null, numeros));

// const $ =  document.querySelectorAll.bind(document, 'li')

const carro = {
  marca: "Ford",
  ano: "2020",
  acelerar(aceleracao, tempo) {
    return ` ${this.marca} ${aceleracao} ${tempo}`;
  },
};

const honda = {
  marca: "honda",
};

const honda1 = {
  marca: "DW",
};

const acelerarCarro = carro.acelerar.bind(honda, 100, 20);
const acelerarCarro1 = carro.acelerar.bind(honda1, 100, 20);
console.log(acelerarCarro());
console.log(acelerarCarro1());

function peso(altura, peso) {
  return altura + peso;
}

const pesoAltura = peso.bind(null, 100, 60);
console.log(pesoAltura());

function criarElemento(tag, classe, conteudo) {
  const criarTag = document.createElement(tag);
  classe ? criarTag.classList.add(classe) : null;
  conteudo ? (criarTag.innerText = conteudo) : null;

  console.log(criarTag);
}

const criar = criarElemento.bind(null, "div", "texto-section", "");
criar();
