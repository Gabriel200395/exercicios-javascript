function criElement(text) {
  function element() {
    const criarButton = document.createElement("button");
    criarButton.innerHTML = text;
    return criarButton;
  }
  return {
    text,
    element,
  };
}

const btnBlue = criElement("Olá eu sou button!");
