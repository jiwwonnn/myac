// Import the functions you need from the SDKs you need
import {FirebaseApp, getApp, initializeApp, getApps} from "firebase/app";
import {getFirestore} from "@firebase/firestore";

export let app : FirebaseApp

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId:  process.env.NEXT_PUBLIC_APP_ID,
};

if(!getApps().length) {
  app = initializeApp(firebaseConfig, "app")
} else {
  app = getApp("app")
}

export const db = getFirestore(app)
