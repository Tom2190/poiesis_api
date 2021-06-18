import firebase from "firebase";
import { getFirebaseConfig } from '../../config.js'

const firebaseConfig = getFirebaseConfig();
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseDb = firebase.firestore()

export default firebaseDb