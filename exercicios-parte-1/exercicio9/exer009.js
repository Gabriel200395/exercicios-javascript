function verificarCpf() {
  let cpf = document.getElementById("cpf").value;
  let resposta = document.getElementById("res");

  resposta.innerHTML = `Olá o seu cpf possui os seguintes numeros ${cpf}`;
}
