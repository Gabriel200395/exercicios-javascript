// class Veiculo {
//   constructor(rodas) {
//     this.rodas = rodas;
//   }
//   acelerar() {
//     console.log("Acelerou");
//   }
// }

// class Moto extends Veiculo {
//   emepinar() {
//     console.log("ele empinou com " + this.rodas + " rodas ");
//   }
// }

class Veiculo {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }
}

class Moto extends Veiculo {
  constructor(rodas, combustivel, capecete) {
    super(rodas, combustivel);
    this.capecete = capecete;
  }
}

const honda = new Moto(2, "Gasolina", "Honda");
console.log(honda);
