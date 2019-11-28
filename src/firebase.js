import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaHDmU366Oh8GPoeZNNu8SwWYXT3Lcxtw",
  authDomain: "turkeytimer1.firebaseapp.com",
  databaseURL: "https://turkeytimer1.firebaseio.com",
  projectId: "turkeytimer1",
  storageBucket: "turkeytimer1.appspot.com",
  messagingSenderId: "276610302213",
  appId: "1:276610302213:web:376715114e9fd7bad6776c",
  measurementId: "G-PG93JEJLNC"
};

firebase.initializeApp(firebaseConfig);

window.firebase = firebase;

export const firestore = firebase.firestore();

export default firebase;
