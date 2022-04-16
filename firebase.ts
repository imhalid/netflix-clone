// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDAsC_RX3jeW5CDOsK1TOxZBGjIPZan8Cw',
  authDomain: 'netflix-clonn.firebaseapp.com',
  projectId: 'netflix-clonn',
  storageBucket: 'netflix-clonn.appspot.com',
  messagingSenderId: '671021938285',
  appId: '1:671021938285:web:1e6e5ce35b5067e8f83164',
}

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()

const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
