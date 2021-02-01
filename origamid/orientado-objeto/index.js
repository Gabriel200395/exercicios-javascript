function Carro(marca, valor) {
  this.marca = marca;
  this.valor = valor;
}
let carro = new Carro("honda", 2000);

function Carro2(marca, valor) {
  this.taxa = 1.2;
  this.marca = marca;
  let precoFinal = valor * this.taxa;
  this.preco = precoFinal;
  console.log(this);
}

let carro2 = new Carro2("honda", 3000);
