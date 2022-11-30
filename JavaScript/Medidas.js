const btn = document.querySelector("#send");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const largura = document.querySelector("#input_largura");

  const larguraUsuario = largura.value;

  const altura = document.querySelector("#input_altura");

  const alturaUsuario = altura.value;

  let areaDoUsuario = larguraUsuario * alturaUsuario;

  document.getElementById("area_usuario").value = areaDoUsuario;
});

const botao = document.querySelector("#botao_catalogo");
const db = firebase.firestore();
let areaUsuario = 12;

botao.addEventListener("click", function (a) {
  a.preventDefault();
  db.collection('area').add({
    areaUsuario: areaUsuario
  });
});
