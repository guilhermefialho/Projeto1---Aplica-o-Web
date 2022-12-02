const firebaseConfig = {
  apiKey: "AIzaSyD-IJBEAQeCzXxeE9FFSPM8TWcU54tZuiY",
  authDomain: "projeto-2-498c4.firebaseapp.com",
  databaseURL: "https://projeto-2-498c4-default-rtdb.firebaseio.com",
  projectId: "projeto-2-498c4",
  storageBucket: "projeto-2-498c4.appspot.com",
  messagingSenderId: "438008889939",
  appId: "1:438008889939:web:0845672aed649009917ca6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth();
const database = firebase.database();

const db = firebase.firestore();