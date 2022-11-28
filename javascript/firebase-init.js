
const firebaseConfig = {
  apiKey: "AIzaSyBJvY9idRqKW7harjpTOv65zuJkTdaF89E",
  authDomain: "projeto-1-f51d1.firebaseapp.com",
  projectId: "projeto-1-f51d1",
  storageBucket: "projeto-1-f51d1.appspot.com",
  messagingSenderId: "368530981141",
  appId: "1:368530981141:web:1431aff79c9667f7a9a91c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()
const database = firebase.database()

