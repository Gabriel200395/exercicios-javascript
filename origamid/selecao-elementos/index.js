const titulo = document.getElementById("titulo");
titulo.style.color = "red";

const li = document.querySelector("li");
console.log(li);

const ul = document.getElementsByTagName("li");

//transformando o HTMLColletion em array
const arrayList = Array.from(ul);

arrayList.forEach((item) => {
  item.classList.add("ativo");
  console.log(item);
});
