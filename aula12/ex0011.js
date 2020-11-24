var sapato = "adidas";
var cor = "preto";

if (sapato != "adidas") {
  console.log("eu não quero esse tênis!");
} else if (sapato == "adidas" || cor == "preto") {
  console.log("acertei na comprar do tênis!");
} else {
  console.log("preciso voltar a loja!");
}

var idade = 67;

if (idade < 16) {
  console.log("você não tem idade para votar");
} else if (idade < 18 || idade > 65) {
  console.log("voto opcinal");
} else {
  console.log("voto obrigatório");
}

var agora = new Date();
var hora = agora.getHours();

if (hora < 12) {
  console.log("bom dia!");
} else if (hora <= 18) {
  console.log("bom tarde!");
} else {
  console.log("boa noite");
}

var agora = new Date();
var diaSem = agora.getDay();

switch (diaSem) {
  case 0:
    console.log("domingo");
    break;
  case 1:
    console.log("segunda");
    break;
  case 2:
    console.log("terça");
    break;
  case 3:
    console.log("quarta");
    break;
  case 4:
    console.log("quinta");
    break;
  case 5:
    console.log("sexta");
    break;
  case 6:
    console.log("sabado");
    break;
  default:
    console.log("dia da semana não existe");
}
