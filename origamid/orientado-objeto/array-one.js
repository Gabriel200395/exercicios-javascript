const arrayDecomidas = ["arroz", "feijao", "salada"];
const RemoverPrimeiro = arrayDecomidas.shift();
const RemoverUltimo = arrayDecomidas.pop();
const addComidaC = arrayDecomidas.push("Arroz");
const addComidaF = arrayDecomidas.unshift("Peixe", "Batata");

const estudantes = ["marcio", "brena", "joana", "kléber", "julia"];
const ordenaAlunos = estudantes.sort();
const mudandoOrdem = estudantes.slice().reverse();

console.log(ordenaAlunos);
console.log(mudandoOrdem);

if (estudantes.indexOf("joana") === 1) {
  console.log("ele não existente");
} else if (estudantes.indexOf("joana") > -1) {
  console.log("ela e existente");
}

if (estudantes.indexOf("julia") === 1) {
  console.log("ele não existente");
} else if (estudantes.indexOf("julia") > -1) {
  console.log("ela e existente");
}

//find retorna true ou false
// findIndex retorna a posicao
