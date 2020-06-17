import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBFyruE5FjDlgYlI5N9X7KpAY97tIAaHXk",
  authDomain: "watchout-4f7ee.firebaseapp.com",
  databaseURL: "https://watchout-4f7ee.firebaseio.com",
  projectId: "watchout-4f7ee",
  storageBucket: "watchout-4f7ee.appspot.com",
  messagingSenderId: "717924729321",
  appId: "1:717924729321:web:7a677552e5ce02e2a08b78",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
