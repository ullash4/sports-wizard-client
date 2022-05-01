import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAb0iObX229e5baPU-yMig94K6eRSrw8H8",
  authDomain: "sports-wizard.firebaseapp.com",
  projectId: "sports-wizard",
  storageBucket: "sports-wizard.appspot.com",
  messagingSenderId: "637635112776",
  appId: "1:637635112776:web:97f9117fedd9f94a3ecd7d"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;