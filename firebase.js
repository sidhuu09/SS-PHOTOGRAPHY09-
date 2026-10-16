
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBb85D1MyUuSRSSUUrMJKQhKf3p4mpx3Dc",
  authDomain: "ss-photographys.firebaseapp.com",
  projectId: "ss-photographys",
  storageBucket: "ss-photographys.firebasestorage.app",
  messagingSenderId: "133403930276",
  appId: "1:133403930276:web:fb70ac714334d0a5160031",
  measurementId: "G-NNTG18H645"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
