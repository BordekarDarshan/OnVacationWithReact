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

export const createUserDataAfterSignIn = async (
  userAuthObject,
  additionalData
) => {
  if (!userAuthObject) return;

  const createUserRefrence = firestore.doc(`users/${userAuthObject.uid}`);

  let checkSnapshotExist = await createUserRefrence.get();

  if (!checkSnapshotExist.exists) {
    const { displayName, email } = userAuthObject;
    const dataCreationDate = new Date();
    try {
      await createUserRefrence.set({
        displayName,
        email,
        dataCreationDate,
        ...additionalData,
      });
    } catch (error) {
      console.log("error occured during creating user.", error.message);
    }
  }
  return createUserRefrence;
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((data) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, data);
  });
  return await batch.commit();
  // returns data in batch.
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((prev, collection) => {
    prev[collection.title.toLowerCase()] = collection;
    return prev;
  }, {});
};

export const currentUser = () => {
  return new Promise((res, rej) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      res(userAuth);
    }, rej);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ promt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
