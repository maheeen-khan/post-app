import { initializeApp } from 'firebase/app';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs  } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCNDiJdnOZ-uP__d8UBjpfdS5CMokwhpi0",
    authDomain: "react-post-app-8860b.firebaseapp.com",
    projectId: "react-post-app-8860b",
    storageBucket: "react-post-app-8860b.firebasestorage.app",
    messagingSenderId: "665139948988",
    appId: "1:665139948988:web:693954c33951ca69a7cfb9"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export{
    auth,getAuth,createUserWithEmailAndPassword,
    signInWithEmailAndPassword,onAuthStateChanged,
    signInWithPopup, GoogleAuthProvider,provider,
    db, collection, addDoc, getDocs
}