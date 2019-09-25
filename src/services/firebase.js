import firebase from 'firebase/app';
import  'firebase/auth';
import  'firebase/firestore';


 const firebaseConfig = {
    apiKey: "AIzaSyAtfeYcDX3YE7JpwGGxziTxhvmCKJRevwo",
    authDomain: "bus-book-project.firebaseapp.com",
    databaseURL: "https://bus-book-project.firebaseio.com",
    projectId: "bus-book-project",
    storageBucket: "",
    messagingSenderId: "387936206995",
    appId: "1:387936206995:web:7fb92dc87adf47b12f8d66",
    measurementId: "G-TNWBZGZXS9"
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)


export const auth = firebase.auth()
export const db   = firebase.firestore()

export default firebase;