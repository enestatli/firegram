import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAURrECk09jJ3xPp8aMpLHxq49dMWSwYBs",
  authDomain: "firegram-53dc5.firebaseapp.com",
  databaseURL: "https://firegram-53dc5.firebaseio.com",
  projectId: "firegram-53dc5",
  storageBucket: "firegram-53dc5.appspot.com",
  messagingSenderId: "599193416173",
  appId: "1:599193416173:web:5f48f0ee715b28a15177e4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();

export { projectStorage, projectFireStore };
