import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAe2LjRdgYFpWcZmcELDKmPIbgMGwUiu7I",
    authDomain: "auth-6ef86.firebaseapp.com",
    projectId: "auth-6ef86",
    storageBucket: "auth-6ef86.appspot.com",
    messagingSenderId: "900919991922",
    appId: "1:900919991922:web:529bb91763524597e6eceb",
    measurementId: "G-QER3K9LNWN" 
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase