import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCoBb0nyRKo-fE78mCh3aw6D63Vyfqd3qk",
  authDomain: "onlineclothing-a502b.firebaseapp.com",
  databaseURL: "https://onlineclothing-a502b.firebaseio.com",
  projectId: "onlineclothing-a502b",
  storageBucket: "onlineclothing-a502b.appspot.com",
  messagingSenderId: "1049927843444",
  appId: "1:1049927843444:web:541fcde65400c8bedf5b21",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
