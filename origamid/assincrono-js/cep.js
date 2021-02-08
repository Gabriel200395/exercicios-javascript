// const formCep = document.getElementById("formCep");
// const cep = document.getElementById("cep");
// const resultadoCep = document.getElementById("res");

// formCep.addEventListener("change", buscarCep);

// function buscarCep(event) {
//   event.preventDefault();
//   const inforCep = cep.value;
//   mostrarCep(inforCep);
// }

// function mostrarCep(inforCep) {
//   fetch(`https://viacep.com.br/ws/${inforCep}/json/`)
//     .then((response) => response.json())
//     .then((valor) => console.log(valor));
// }

const MostrarPiada = document.getElementById("res");
const buttonProximo = document.getElementById("proxima");

function buscarPiada() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((piada) => {
      MostrarPiada.innerText = piada.value;
    });
}

buttonProximo.addEventListener("click", buscarPiada);
window.addEventListener("load", buscarPiada);
