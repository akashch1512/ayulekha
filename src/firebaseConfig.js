// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn89TPROLx9zV8mWuzoWlQ5_gPYw_oNE4",
  authDomain: "ayulekha-2d87b.firebaseapp.com",
  projectId: "ayulekha-2d87b",
  storageBucket: "ayulekha-2d87b.appspot.com",
  messagingSenderId: "137416017297",
  appId: "1:137416017297:web:d690c968d3aab00ef78630",
  measurementId: "G-YPC6FQ683N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export named exports
export { app, analytics, auth, db, storage };
