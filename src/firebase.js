import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjAvwz96Uww0ipX8mQ1X5p9THfdXdGoqE",
  authDomain: "silaan.firebaseapp.com",
  projectId: "silaan",
  storageBucket: "silaan.appspot.com",
  messagingSenderId: "414176863917",
  appId: "1:414176863917:web:94d39180d1b6978ca40824",
  measurementId: "G-EJRCDV91ZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
export default app;