function colorNavbar() {
  let navbar = document.querySelector("nav");
  navbar.classList.add("nav-container");
}

function logoHome() {
  let logo = document.querySelector("h3");
  logo.setAttribute("id", "logo");
}

function menusHome() {
  let menus = document.querySelector("ul");
  menus.classList.add("menus-item");

  let menusItens = document.querySelectorAll(".menus-item li");
  menusItens.forEach((item) => item.classList.add("ativo"));
  menusItens.offsetWidth;
  console.log(menusItens);
}

colorNavbar();
logoHome();
menusHome();

let small = window.matchMedia("(max-width:520px)").matches;

if (small) {
  let navbar = document.querySelector("nav");
  navbar.classList.add("menu-mobile");
} else {
  console.log("tela nāo mobile");
}
