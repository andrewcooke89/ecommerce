import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCHe9Q3S9LwVonYwDwMyKhe8u6bgmwVsi8",
  authDomain: "crown-db-81003.firebaseapp.com",
  databaseURL: "https://crown-db-81003.firebaseio.com",
  projectId: "crown-db-81003",
  storageBucket: "crown-db-81003.appspot.com",
  messagingSenderId: "207394699454",
  appId: "1:207394699454:web:df3a45f899f716183e86ef",
  measurementId: "G-6FQEN3NR4Q"
};

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
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;