import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD2gXrT5zzOxDevxAVSXhKJQYUyII_kQ0w",
  authDomain: "e-bike-f0e56.firebaseapp.com",
  databaseURL: "https://e-bike-f0e56-default-rtdb.firebaseio.com",
  projectId: "e-bike-f0e56",
  storageBucket: "e-bike-f0e56.appspot.com",
  messagingSenderId: "325677981680",
  appId: "1:325677981680:web:d4056979f29575b992c735"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
