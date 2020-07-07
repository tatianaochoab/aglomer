import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA9eCG1x0FO7s5oaxhnbFbVmbdaW2y6P1U",
    authDomain: "aglomer-9c6d9.firebaseapp.com",
    databaseURL: "https://aglomer-9c6d9.firebaseio.com",
    projectId: "aglomer-9c6d9",
    storageBucket: "aglomer-9c6d9.appspot.com",
    messagingSenderId: "1083676464062",
    appId: "1:1083676464062:web:cc72698c7c5b1ff55ddfef",
    measurementId: "G-R94HSQ1B78"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;
