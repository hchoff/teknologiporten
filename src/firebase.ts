import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {enableIndexedDbPersistence, getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKPKtDGW4_PQ2NYL_GI58APuCLZGelJ4I",
  authDomain: "teknologiporten-86665.firebaseapp.com",
  projectId: "teknologiporten-86665",
  storageBucket: "teknologiporten-86665.appspot.com",
  messagingSenderId: "667991537279",
  appId: "1:667991537279:web:1f8da120e91e9062d5314a"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const firestore = getFirestore();
enableIndexedDbPersistence(firestore)