import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyCfWZ1_urNlmGhNhcBfOoQ0wBK8GXqNiPc',
  authDomain: 'laundry-app-4abbd.firebaseapp.com',
  projectId: 'laundry-app-4abbd',
  storageBucket: 'laundry-app-4abbd.appspot.com',
  messagingSenderId: '740668133718',
  appId: '1:740668133718:web:c05ae71c05ac60522686f7',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
