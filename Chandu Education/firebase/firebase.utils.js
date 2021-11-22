// firebase.utils.js
import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    // apiKey: "AIzaSyAaelwlWRauYkQFSJDCbGxaRJyF7ACHtcU",
    // authDomain: "react-lessons-ded34.firebaseapp.com",
    // databaseURL: "https://react-lessons-ded34.firebaseio.com",
    // projectId: "react-lessons-ded34",
    // storageBucket: "react-lessons-ded34.appspot.com",
    // messagingSenderId: "664185367220",
    // appId: "1:664185367220:web:5db3f261d498df12d205e1"

    apiKey: "AIzaSyCEvsYu1kCyLIWrrZ-4GW5SZaZo8FtnvfA",
    authDomain: "nikhilkaranamyt.firebaseapp.com",
    projectId: "nikhilkaranamyt",
    storageBucket: "nikhilkaranamyt.appspot.com",
    messagingSenderId: "994172590084",
    appId: "1:994172590084:web:e5fe36a60f36421833bd51",
    measurementId: "G-9B1M9DQMT3"  
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;