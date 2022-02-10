import firebase from "firebase/compat/app";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCAP2nZ9qGnvRa2KgwQ31FjhUWRAsKKfD0",
  authDomain: "canhdinh-linkedin-clone.firebaseapp.com",
  projectId: "canhdinh-linkedin-clone",
  storageBucket: "canhdinh-linkedin-clone.appspot.com",
  messagingSenderId: "22975209414",
  appId: "1:22975209414:web:61ce8d22adac001a5c1cc7",
  measurementId: "G-DB65T69V15",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, storage };
export default db;
