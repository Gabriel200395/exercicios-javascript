const button = {
  // retono do meu objeto
  get element() {
    return this.el;
  },

  // vai setar
  set element(tipo) {
    this.el = document.createElement(tipo);
  },
};

button.element = "button";
button.element;

const calcular = {
  // retono do meu objeto
  get element() {
    return this.el || 200;
  },
  // vai setar
  set element(numero) {
    this.el = numero * 200;
  },
};

calcular.element;
calcular.element;

const frutas = {
  lista: [],
  set setFrutas(fruta) {
    this.lista.push(fruta);
  },
};

frutas.setFrutas = "banana";

class Button {
  constructor(background, text) {
    this.background = background;
    this.text = text;
  }

  get createButton() {
    const type = this.elementType || "button";

    const buttonDom = document.createElement(type);
    buttonDom.style.backgroundColor = this.background;
    buttonDom.innerHTML = this.text;

    const corpo = document.querySelector("body");
    corpo.appendChild(buttonDom);

    return buttonDom;
  }

  set createButton(type) {
    this.elementType = type;
  }
}

const buttonBlue = new Button("blue", "clicar");

buttonBlue.createButton = "div";

buttonBlue.createButton;
