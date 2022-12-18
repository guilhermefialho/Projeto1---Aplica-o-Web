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
        alert("R$ "+((key,Number(key)) * 124))}
          });
  });
});
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let areaDoCliente = document.querySelector('[number=area]').value;
  db.collection('Area').add({
    areaDoCliente: areaDoCliente
  })
  alert('Área enviada com sucesso, siga para o Catálogo!');
});
const botao2 = document.querySelector('#Button2');
botao2.addEventListener('click',(e)=>{
  e.preventDefault();
  db.collection("Area").onSnapshot(function(documentos){
    documentos.docChanges().forEach(function (changes){
      if(changes.type === "added"){
        const doc = changes.doc
        const dados = doc.data()
        let key = dados.areaDoCliente
        alert("R$ "+((key,Number(key)) * 155))}
          });
  });
});
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let areaDoCliente = document.querySelector('[number=area]').value;
  db.collection('Area').add({
    areaDoCliente: areaDoCliente
  })
  alert('Área enviada com sucesso, siga para o Catálogo!');
});
const botao3 = document.querySelector('#Button3');
botao3.addEventListener('click',(e)=>{
  e.preventDefault();
  db.collection("Area").onSnapshot(function(documentos){
    documentos.docChanges().forEach(function (changes){
      if(changes.type === "added"){
        const doc = changes.doc
        const dados = doc.data()
        let key = dados.areaDoCliente
        alert("R$ "+((key,Number(key)) * 118))}
          });
  });
});
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let areaDoCliente = document.querySelector('[number=area]').value;
  db.collection('Area').add({
    areaDoCliente: areaDoCliente
  })
  alert('Área enviada com sucesso, siga para o Catálogo!');
});
const botao4 = document.querySelector('#Button4');
botao4.addEventListener('click',(e)=>{
  e.preventDefault();
  db.collection("Area").onSnapshot(function(documentos){
    documentos.docChanges().forEach(function (changes){
      if(changes.type === "added"){
        const doc = changes.doc
        const dados = doc.data()
        let key = dados.areaDoCliente
        alert("R$ "+((key,Number(key)) * 129))}
          });
  });
});
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let areaDoCliente = document.querySelector('[number=area]').value;
  db.collection('Area').add({
    areaDoCliente: areaDoCliente
  })
  alert('Área enviada com sucesso, siga para o Catálogo!');
});
const botao5 = document.querySelector('#Button5');
botao5.addEventListener('click',(e)=>{
  e.preventDefault();
  db.collection("Area").onSnapshot(function(documentos){
    documentos.docChanges().forEach(function (changes){
      if(changes.type === "added"){
        const doc = changes.doc
        const dados = doc.data()
        let key = dados.areaDoCliente
        alert("R$ "+((key,Number(key)) * 169))}
          });
  });
});
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let areaDoCliente = document.querySelector('[number=area]').value;
  db.collection('Area').add({
    areaDoCliente: areaDoCliente
  })
  alert('Área enviada com sucesso, siga para o Catálogo!');
});
const botao6 = document.querySelector('#Button6');
botao6.addEventListener('click',(e)=>{
  e.preventDefault();
  db.collection("Area").onSnapshot(function(documentos){
    documentos.docChanges().forEach(function (changes){
      if(changes.type === "added"){
        const doc = changes.doc
        const dados = doc.data()
        let key = dados.areaDoCliente
        alert("R$ "+((key,Number(key)) * 132))}
          });
  });
});
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let areaDoCliente = document.querySelector('[number=area]').value;
  db.collection('Area').add({
    areaDoCliente: areaDoCliente
  })
  alert('Área enviada com sucesso, siga para o Catálogo!');
});
const botao7 = document.querySelector('#Button7');
botao7.addEventListener('click',(e)=>{
  e.preventDefault();
  db.collection("Area").onSnapshot(function(documentos){
    documentos.docChanges().forEach(function (changes){
      if(changes.type === "added"){
        const doc = changes.doc
        const dados = doc.data()
        let key = dados.areaDoCliente
        alert("R$ "+((key,Number(key)) * 139))}
          });
  });
});
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let areaDoCliente = document.querySelector('[number=area]').value;
  db.collection('Area').add({
    areaDoCliente: areaDoCliente
  })
  alert('Área enviada com sucesso, siga para o Catálogo!');
});
const botao8 = document.querySelector('#Button8');
botao8.addEventListener('click',(e)=>{
  e.preventDefault();
  db.collection("Area").onSnapshot(function(documentos){
    documentos.docChanges().forEach(function (changes){
      if(changes.type === "added"){
        const doc = changes.doc
        const dados = doc.data()
        let key = dados.areaDoCliente
        alert("R$ "+((key,Number(key)) * 147))}
          });
  });
});