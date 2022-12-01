const firebaseConfig = {
  apiKey: "AIzaSyAstYgK0RRPFuQwjDnYDwWrFRNliCHlnzk",
  authDomain: "teste-249ae.firebaseapp.com",
  projectId: "teste-249ae",
  storageBucket: "teste-249ae.appspot.com",
  messagingSenderId: "805468126168",
  appId: "1:805468126168:web:75b43770fba2c1ea1f90ad"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let areaDoCliente = document.querySelector('[number=area]').value;
  db.collection('Area').add({
    areaDoCliente: areaDoCliente
  })
  alert('Área enviada com sucesso, siga para o Catálogo!');
});
const botao1 = document.querySelector('#Button1');
botao1.addEventListener('click',(e)=>{
  e.preventDefault();
  db.collection("Area").onSnapshot(function(documentos){
    documentos.docChanges().forEach(function (changes){
      if(changes.type === "added"){
        const doc = changes.doc
        const dados = doc.data()
        let key = dados.areaDoCliente
        console.log((key,Number(key)) * 124.99)}
          })
        let resposta = confirm("escolhido com sucesso, prosseguir pro carrinho?")
        if(resposta == true){
          window.location.href = "Carrinho.html";
        } else {
      };
  });
});