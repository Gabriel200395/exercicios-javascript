const controles = document.querySelector("#controle");
const btn = document.querySelector(".btn");
const cssText = document.querySelector(".dm");
controles.addEventListener("change", changeControle);

const handleStyle = {
  element: btn,

  texto(value) {
    this.element.innerHTML = value;
  },

  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },

  width(value) {
    this.element.style.width = value + "px";
  },

  height(value) {
    this.element.style.height = value + "px";
  },

  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },

  color(value) {
    this.element.style.color = value;
  },

  border(value) {
    this.element.style.border = value;
  },
};

function changeControle(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value);
  showCss();
  saveValues(name, value);
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function setValues() {
  const propriedades = Object.keys(localStorage);
  propriedades.forEach((propriedade) => {
    handleStyle[propriedade](localStorage[propriedade]);
    controles.elements[propriedade].value = localStorage[propriedade];
  });
  showCss();
}

setValues();
function showCss() {
  cssText.innerHTML =
    "<span>" + btn.style.cssText.split("; ").join(";</span><span>");
}
