function verificadorDeHorario() {
  let msg = window.document.getElementById("msg");
  let img = window.document.getElementById("imagem");
  let agora = new Date();
  let hora = agora.getHours();
  msg.innerHTML = `Olá, agora são ${hora} horas`;
  if (hora >= 0 && hora <= 12) {
    img.src = "./Images/manha.png";
    window.document.body.style.backgroundColor = "#d8d6b5";
  } else if (hora > 12 && hora <= 18) {
    img.src = "./Images/tarde.png";
    window.document.body.style.backgroundColor = "#8f8e80";
  } else {
    img.src = "./Images/noite.png";
    window.document.body.style.backgroundColor = "#30302e";
  }
}
