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

const firebaseConfig = {
  apiKey: "AIzaSyD-IJBEAQeCzXxeE9FFSPM8TWcU54tZuiY",
  authDomain: "projeto-2-498c4.firebaseapp.com",
  databaseURL: "https://projeto-2-498c4-default-rtdb.firebaseio.com",
  projectId: "projeto-2-498c4",
  storageBucket: "projeto-2-498c4.appspot.com",
  messagingSenderId: "438008889939",
  appId: "1:438008889939:web:0845672aed649009917ca6",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

db.collection("valores").doc("ambiente").get().then(function(doc){

  if(doc.exists){

    console.log("Existe")

  }else{
    console.log("Não Existe")
  }
})