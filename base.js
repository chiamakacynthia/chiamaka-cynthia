
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDvdAO6PTTWxFEtRM4_AP-h-vwBZW6oebU",
  authDomain: "chiamaka-cynthia.firebaseapp.com",
  projectId: "chiamaka-cynthia",
  storageBucket: "chiamaka-cynthia.appspot.com",
  messagingSenderId: "215573378775",
  appId: "1:215573378775:web:6b88016102527dd8e4e292",
  measurementId: "G-CCPT7691E5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);