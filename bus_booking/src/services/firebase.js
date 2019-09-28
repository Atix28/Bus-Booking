import firebase from 'firebase/app';
import  'firebase/auth';
import  'firebase/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyC_L57KOfg7-3J695v3Nv9T06ntaHhfhjM",
  authDomain: "bus-ticket-app-7c550.firebaseapp.com",
  databaseURL: "https://bus-ticket-app-7c550.firebaseio.com",
  projectId: "bus-ticket-app-7c550",
  storageBucket: "bus-ticket-app-7c550.appspot.com",
  messagingSenderId: "850686102896",
  appId: "1:850686102896:web:00f5a419c96a261a2a13b5",
  measurementId: "G-8PYTB2XTLY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



export const auth = firebase.auth()
export const db   = firebase.firestore()

export default firebase;