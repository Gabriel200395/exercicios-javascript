function criElement(text) {
  function element() {
    const criarButton = document.createElement("button");
    criarButton.innerHTML = text;
    return criarButton;
  }
  // congelar meus objetos
  return Object.freeze({
    text,
    element,
  });
}

const btnBlue = criElement("Olá eu sou button!");

function Pessoa(nome) {
  if (!(this instanceof Pessoa)) {
    return new Pessoa(nome);
  }
  this.nome = nome;

  Pessoa.prototype.pessoaNome = function () {
    return console.log(" ele e designer " + this.nome);
  };
}

const designer = Pessoa("Gabriel");
console.log(designer);
