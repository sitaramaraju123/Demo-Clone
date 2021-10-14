import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBykqPEM0DOj_uz267a_bkVB5c8ya_C43M",
  authDomain: "project-35860.firebaseapp.com",
  projectId: "project-35860",
  storageBucket: "project-35860.appspot.com",
  messagingSenderId: "670251829375",
  appId: "1:670251829375:web:46b40837016b71d9ded74a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
