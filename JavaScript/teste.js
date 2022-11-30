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

db.collection("medidas").doc("2").get().then(function(doc){

  if(doc.exists){

    console.log("Existe")

  }else{
    console.log("Não Existe")
  }

})