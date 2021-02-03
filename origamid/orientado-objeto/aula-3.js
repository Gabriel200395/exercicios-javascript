function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function () {
  return this.nome + " andou ";
};

const gabriel = new Pessoa("Gabriel", 25);
gabriel.andar("Gabriel");
console.log(Pessoa.prototype);

const lista = document.querySelector(".lista li");

//transformando elementos em array
//const listaArray = Array.prototype.slice.call(lista);

//transformando elementos em array
const listaArray = Array.from(lista);

const carros = {
  marca: "Ford",
  preco: 2000,
  andar() {
    return true;
  },
};
