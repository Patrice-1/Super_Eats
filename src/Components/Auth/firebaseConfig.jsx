import {initializeApp} from "firebase/app";
import { getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyChErO9-UYYdzm5tQuTcr2XJaJ407odN1w",
  authDomain: "super-eats-01.firebaseapp.com",
  projectId: "super-eats-01",
  storageBucket: "super-eats-01.appspot.com",
  messagingSenderId: "1074775654886",
  appId: "1:1074775654886:web:b22a1804de2e4c48cd9627",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);