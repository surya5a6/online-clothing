import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoBb0nyRKo-fE78mCh3aw6D63Vyfqd3qk",
  authDomain: "onlineclothing-a502b.firebaseapp.com",
  databaseURL: "https://onlineclothing-a502b.firebaseio.com",
  projectId: "onlineclothing-a502b",
  storageBucket: "onlineclothing-a502b.appspot.com",
  messagingSenderId: "1049927843444",
  appId: "1:1049927843444:web:541fcde65400c8bedf5b21",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
