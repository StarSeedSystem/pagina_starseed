// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxlVXg8Xj-N0KAzyotvjVCFAFI1_DjQEg",
  authDomain: "starseed-c4b17.firebaseapp.com",
  projectId: "starseed-c4b17",
  storageBucket: "starseed-c4b17.appspot.com",
  messagingSenderId: "734855035230",
  appId: "1:734855035230:web:59cbcf748d33f35378f7cf",
  measurementId: "G-YYDQS562CP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);