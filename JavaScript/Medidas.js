const btn = document.querySelector("#send");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const largura = document.querySelector("#input_largura");

  const larguraUsuario = largura.value;

  const altura = document.querySelector("#input_altura");

  const alturaUsuario = altura.value;

  const areaDoUsuario = larguraUsuario * alturaUsuario;

  document.getElementById("area_usuario").value = areaDoUsuario;

});

const db = firebase.firestore();
const md = document.querySelector("#area_usuario");

md.addEventListener("click", function (a) {
  a();
  let medidas = document.querySelector ('[nome=medidas]').value;
  db.collection('medidas').add({
    area:area
  })
});

