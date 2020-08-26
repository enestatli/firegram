import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

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
const auth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

const provider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = projectFireStore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL, newData } = user;

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        newData: "newdata",
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await projectFireStore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

export {
  projectStorage,
  projectFireStore,
  auth,
  timestamp,
  signInWithGoogle,
  generateUserDocument,
};
