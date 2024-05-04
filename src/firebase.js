import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyDK5wz8wprHHz1FtBYWkH9YdKbhTFmJQLs",
  authDomain: "blog-afb2f.firebaseapp.com",
  projectId: "blog-afb2f",
  storageBucket: "blog-afb2f.appspot.com",
  messagingSenderId: "977606378430",
  appId: "1:977606378430:web:1544b0f83116de10252fef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };