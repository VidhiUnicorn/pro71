import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyD9Ii2LR2QB2-YNUl2lwlGycVIZ6dMv8h0",
    authDomain: "project-71-fbf4f.firebaseapp.com",
    projectId: "project-71-fbf4f",
    storageBucket: "project-71-fbf4f.appspot.com",
    messagingSenderId: "590513300858",
    appId: "1:590513300858:web:61858a2c228285ea3d22c3"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
