import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrYVp2U4PpRFWTMm5qVWOsQnEDmGopYHY",
  authDomain: "loginblog-50aa4.firebaseapp.com",
  databaseURL: "https://loginblog-50aa4.firebaseio.com",
  projectId: "loginblog-50aa4",
  storageBucket: "loginblog-50aa4.appspot.com",
  messagingSenderId: "460448621237",
  appId: "1:460448621237:web:03c933862ae775903dd4fc",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
