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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`/users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exist) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log('error creating user', err.message);
        }
    }
    
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;