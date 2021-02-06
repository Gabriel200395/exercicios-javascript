const carros = {
  nomeCarro(carro) {
    this.marca = carro;
    return this;
  },
  carroAndou() {
    console.log(this.marca + " percorreu muito km ");
  },
};

const Honda = Object.create(carros).nomeCarro("Honda");
const ferrari = Object.create(carros).nomeCarro("ferrari");

const buscarEL = {
  buscar(element) {
    this.el = document.querySelector(element);
    return this;
  },
  classe(teste) {
    this.el.classList.add(teste);
  },
  criar(el) {
    this.u = document.createElement(el);
    return this;
  },
  add() {
    this.el.appendChild(this.u);
  },
};

const elementos = Object.create(buscarEL);
console.log(elementos);
elementos.buscar("li");
elementos.classe("teste");
elementos.criar("div");
elementos.add();
