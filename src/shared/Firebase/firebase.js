import firebase from "firebase";
import { getFirebaseConfig } from '../../config.js'

// Initialize Firebase
firebase.initializeApp(getFirebaseConfig());

const firebaseDb = firebase.firestore()

export default firebaseDb