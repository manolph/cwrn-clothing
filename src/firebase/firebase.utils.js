import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDNh--dJcDycoMIjmW4p3LkRT5CQGUjuE8",
    authDomain: "crwn-clothing-db-54a6c.firebaseapp.com",
    databaseURL: "https://crwn-clothing-db-54a6c.firebaseio.com",
    projectId: "crwn-clothing-db-54a6c",
    storageBucket: "",
    messagingSenderId: "515052660961",
    appId: "1:515052660961:web:e6365ca0fe8afad3"
  };

  export const createUserProfileDocument = async (authUser, additionalData) => {
    if(!authUser) return;
    const userRef = firestore.doc(`users/${authUser.uid}`);
    const snapShot = await userRef.get();

    try {
      if(!snapShot.exists) {
        const { displayName, email } = authUser;
        const createdAt = new Date();

        userRef.set(await {
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
    } catch(error){
      console.error('uable to add new user');
    }

    return userRef;
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;