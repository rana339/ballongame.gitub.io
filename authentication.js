
const firebaseConfig = {
    apiKey: "AIzaSyBco3og59JwAPT8ZWe-ieeDGtM1MG2g-Rc",
    authDomain: "hackerthon-71336.firebaseapp.com",
    projectId: "hackerthon-71336",
    storageBucket: "hackerthon-71336.appspot.com",
    messagingSenderId: "200682306572",
    appId: "1:200682306572:web:36446cc41e3709d601c229",
    measurementId: "G-8E4RQ692W2"
  };
  firebase.initializeApp(firebaseConfig);





function signup(){


let email  =document.getElementById("email").value;
let password =document.getElementById("password").value

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}
function login(){

  
  let email  =document.getElementById("log_email").value
  let password =document.getElementById("log_password").value
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  
  location.href="index1.html"

  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

let provider = new firebase.auth.GoogleAuthProvider();
function google(){
  firebase.auth().signInWithPopup(provider)}