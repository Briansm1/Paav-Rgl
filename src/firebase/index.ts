
import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';
import { firebaseConfig } from './config';

let app: FirebaseApp;
let firestore: Firestore;
let auth: Auth;

export function initializeFirebase() {
  if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
    firestore = getFirestore(app);
    auth = getAuth(app);
  } else {
    app = getApps()[0];
    firestore = getFirestore(app);
    auth = getAuth(app);
  }

  return { app, firestore, auth };
}
