function Contador() {
  let incio = document.getElementById("txti");
  let fim = document.getElementById("txtf");
  let passo = document.getElementById("txtp");
  let resposta = document.getElementById("res");
  if (
    incio.value.length === 0 ||
    fim.value.length === 0 ||
    passo.value.length === 0
  ) {
    resposta.innerHTML = "Impossivel Contar ...";
    alert("[ERRO]faltar dados");
  } else {
    resposta.innerHTML = "Contador:";
    let i = Number(incio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    if (p <= 0) {
      window.alert("Foi impossivel contagem passo vai valer 1 agora");
      p = 1;
    }
    if (i < f) {
      for (c = i; c <= f; c += p) {
        resposta.innerHTML += ` ${c}  \u{1F643}`;
      }
    } else {
      for (c = i; c >= f; c -= p) {
        resposta.innerHTML += ` ${c}  \u{1F643}`;
      }
    }
  }
}
