function Pessoa(nome, sobreNome, idade) {
  this.nome = nome;
  this.sobreNome = sobreNome;
  this.idade = idade;
}

Pessoa.prototype.NomeCompleto = function () {
  return `O dele e ${this.nome} e o sobre ${this.sobreNome} `;
};

const gabriel = new Pessoa("Gabriel", "Souza", 25);

// const Dom = {
//   seletor: "li",
//   element() {
//     return document.querySelectorAll(this.seletor);
//   },
//   percorrer() {
//     this.element().forEach((item) => {
//       console.log(item);
//     });

//     return this.element();
//   },
// };

//buscar os metados dos elementos
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
