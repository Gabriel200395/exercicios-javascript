let num = window.document.getElementById("fnum");
let lista = window.document.getElementById("flist");
let resposta = window.document.getElementById("res");
let valores = [];

function isNumero(num) {
  if (Number(num) >= 1 && Number(num) <= 100) {
    return true;
  } else {
    return false;
  }
}

function isLista(num, l) {
  if (l.indexOf(Number(num)) != -1) {
    return true;
  }
  return false;
}

function adicionar() {
  if (isNumero(num.value) && !isLista(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.textContent = `valor adicionado ${num.value}`;
    lista.appendChild(item);
  } else {
    alert("numero já existente no array");
  }

  num.value = "";
  num.focus();
}

function finalizar() {
  if (valores.length === 0) {
    alert("adicione valores antes de finalizar");
  } else {
    let total = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;

    for (let pos in valores) {
      soma += valores[pos];
      if (valores[pos] > maior) {
        maior = valores[pos];
      }
      if (valores[pos] < menor) {
        menor = valores[pos];
      }
    }

    media = soma / total;
    resposta.innerHTML = "";
    resposta.innerHTML += `<br /> O total de números cadastrados são ${total}  <br />`;
    resposta.innerHTML += `O maior número ${maior} <br />`;
    resposta.innerHTML += `O menor número ${menor} <br />`;
    resposta.innerHTML += `A soma entre os valores ${soma} <br />`;
    resposta.innerHTML += `A media da soma entre os valores ${media} <br />`;
  }
}
