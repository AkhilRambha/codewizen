// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN7pStHDH2c7SDb5UAb0jQ4jt_-yhxdNQ",
  authDomain: "codewizen-1ea82.firebaseapp.com",
  databaseURL: "https://codewizen-1ea82-default-rtdb.firebaseio.com",
  projectId: "codewizen-1ea82",
  storageBucket: "codewizen-1ea82.firebasestorage.app",
  messagingSenderId: "13460088896",
  appId: "1:13460088896:web:39532314add4c0ff0ed7a5",
  measurementId: "G-NYWVH0XDKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const storage = getStorage(app);

export { database, storage };
