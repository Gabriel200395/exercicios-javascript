// funcao de  criar elementos
function criarElementos(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  elemento.classList.add(classe);
  elemento.innerText = conteudo;
  console.log(elemento);
}

const criar = criarElementos.bind(null, "p", "paragrafo", "text");
criar();

// funcao construtora
function Dom(elemento) {
  this.criarElement = document.createElement(elemento);
}
Dom.prototype.texto = function (conteudo1) {
  this.criarElement.innerText = conteudo1;
};
Dom.prototype.classe1 = function (cl) {
  this.criarElement.classList.add(cl);
  console.log(this.criarElement);
};
const elementoDom = {
  criarElement: document.createElement("p"),
};
Dom.prototype.classe1.call(elementoDom, "text");
Dom.prototype.texto.call(elementoDom, "texto");

//outra forma

const Dom1 = {
  buscar(el) {
    this.elemento1 = document.querySelector(el);
    return this;
  },
  mudarTexto(conteudo2) {
    this.elemento1.innerText = conteudo2;
  },

  classeNova(classe2) {
    this.elemento1.classList.add(classe2);
  },
};

const Dom2 = Object.create(Dom1);
Dom2.buscar("li");
Dom2.mudarTexto("Mudei o texto");
Dom2.classeNova("nova-classe");

// buscando dados de sendo array like e transformando Array
let array = document.querySelectorAll("li");

const arrEl = Array.prototype.filter.call(array, (item) => {
  console.log(item);
  return true;
});
