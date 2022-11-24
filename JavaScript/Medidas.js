const btn = document.querySelector("#send");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const largura = document.querySelector("#input_largura");

  const larguraUsuario = largura.value;

  const altura = document.querySelector("#input_altura");

  const alturaUsuario = altura.value;

  let areaDoUsuario = larguraUsuario * alturaUsuario;

  document.getElementById("area_usuario").value = areaDoUsuario;



  let primeiroCalculo = (areaDoUsuario * 124, 99);
  const botao1 = document.querySelector("#primeiroButton");

  botao1.addEventListener("click", primeiroBotao);
  function primeiroBotao() {
  }
});
