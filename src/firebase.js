import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCNlyeqoPkl1ZgKcbgah0iChmFYctgcDn0",
    authDomain: "linkedin-retepclone.firebaseapp.com",
    projectId: "linkedin-retepclone",
    storageBucket: "linkedin-retepclone.appspot.com",
    messagingSenderId: "1089444721408",
    appId: "1:1089444721408:web:26a860b2569e784c7ab9e5"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const db = app.firestore();
  const auth = firebase.auth();

  export { db, auth };