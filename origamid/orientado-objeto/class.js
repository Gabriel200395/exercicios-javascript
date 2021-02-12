class Button {
  constructor(background, text, options) {
    this.background = background;
    this.text = text;
    this.options = options;
  }

  element() {
    const { cor, borderRadius } = this.options;
    const buttonDom = document.createElement("button");
    buttonDom.style.backgroundColor = this.background;
    buttonDom.style.color = cor;
    buttonDom.style.borderRadius = borderRadius;

    buttonDom.innerHTML = this.text;
    return buttonDom;
  }

  addBody(tag) {
    const buscarElemento = document.querySelector(tag);
    buscarElemento.appendChild(this.element());
    return buscarElemento;
  }

  //retorna os parametros da funcao
  // static buttonBlue(texto) {
  //   return new Button(background, texto, options);
  // }
}

const corButton = {
  cor: "white",
  borderRadius: "5px",
};

const createButton = new Button("blue", "Comprar", corButton);
console.log(createButton.element());
console.log(createButton.addBody("Body"));

// class CreateButton {
//   constructor(options) {
//     this.options = options;
//   }

//   static buttonElement(el) {
//     const botao = document.createElement(el);
//     return botao;
//   }
// }

// const corButton = {
//   cor: "white",
//   borderRadius: "5px",
// };

// const buttonOne = new CreateButton(corButton);
// const buttonTwo = CreateButton.buttonElement("button");
// console.log(buttonTwo);
