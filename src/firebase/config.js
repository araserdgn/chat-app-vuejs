import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCGy2OE_6xhSx99K81G_Px03vFWweU7scw",
    authDomain: "blog-v-8cb12.firebaseapp.com",
    projectId: "blog-v-8cb12",
    storageBucket: "blog-v-8cb12.appspot.com",
    messagingSenderId: "966450668637",
    appId: "1:966450668637:web:26c3e68e8a3157f22619b4",
    measurementId: "G-VB2HHVBYY6"
  };

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectFirestore,projectAuth, timestamp}