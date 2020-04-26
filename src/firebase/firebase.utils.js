import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA6sjfbfhFSCJw5S9g0xdzacUkhHmE7yMI",
    authDomain: "crwn-db-f85f2.firebaseapp.com",
    databaseURL: "https://crwn-db-f85f2.firebaseio.com",
    projectId: "crwn-db-f85f2",
    storageBucket: "crwn-db-f85f2.appspot.com",
    messagingSenderId: "1032208311742",
    appId: "1:1032208311742:web:991b72c669bc549eda85ef",
    measurementId: "G-MBZR2YP7L7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;