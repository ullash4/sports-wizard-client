import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey:"AIzaSyC8zJjdg_Jjt95HXE9n30-EdDq0c58u-ck",
  authDomain:"sports-wizard-e919a.firebaseapp.com",
  projectId:"sports-wizard-e919a",
  storageBucket:"sports-wizard-e919a.appspot.com",
  messagingSenderId:"885462925339",
  appId:"1:885462925339:web:d5a1446675733b93e4f8be"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;