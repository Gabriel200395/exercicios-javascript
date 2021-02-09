// async function puxarDados() {
//   try {
//     const buscarDate = await fetch(
//       "https://jsonplacehoslder.typicode.com/posts"
//     );
//     const responseDate = await buscarDate.json();
//     console.log(responseDate);
//   } catch {
//     console.log("Nao foi possivel accesar os dados");
//   }
// }

// puxarDados();

async function buscarData() {
  const buscarDate = fetch("https://jsonplaceholder.typicode.com/posts");

  const resultadoResponse = await (await buscarDate).json();
  console.log(resultadoResponse);
}

buscarData();
