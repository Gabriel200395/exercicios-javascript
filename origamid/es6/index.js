const preco = (valor) => +valor.replace("R$", "").replace(",", ".");
console.log(preco("R$ 50,00"));
