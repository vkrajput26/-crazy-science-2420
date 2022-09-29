import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDYeICX9rWGdmkqpke9TA896yfaEaFCw2U",
  authDomain: "lovoda-authentication.firebaseapp.com",
  projectId: "lovoda-authentication",
  storageBucket: "lovoda-authentication.appspot.com",
  messagingSenderId: "815381588547",
  appId: "1:815381588547:web:d25eb7bde67b0d6e9802f6",
  measurementId: "G-TS2C1BVNWL",
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;