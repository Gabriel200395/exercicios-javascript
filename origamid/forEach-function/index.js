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
}

colorNavbar();
logoHome();
menusHome();

//contains retotna true ou false
//replace substituir classe
//toogle adicona ou remove a classe
//remove remover a classe
