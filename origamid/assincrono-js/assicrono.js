fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => receberDados(json))
  .catch(() => console.log("nao foi possivel acessar Api"));

function receberDados(arr) {
  const resposta = document.getElementById("res");
  const dados = arr.map((e) => {
    return `
        <p>${e.title}<p>
    `;
  });
  resposta.innerHTML = dados.join(" ");

  return arr;
}
