import firebase from 'firebase';
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyDV3a7xNmccjZndZLfHCvZM8F2erdd0RiQ",
    authDomain: "barter-system-app-47934.firebaseapp.com",
    projectId: "barter-system-app-47934",
    storageBucket: "barter-system-app-47934.appspot.com",
    messagingSenderId: "300547864968",
    appId: "1:300547864968:web:8c37b17c8ab7fa621be23d"
  };
  // Initialize Firebase
  if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); }
  export default firebase.firestore();