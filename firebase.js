// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDfvX7-EJPXabokJcREuKRbnnYNo09T_-Q',
  authDomain: 'insta-clone-aac9d.firebaseapp.com',
  projectId: 'insta-clone-aac9d',
  storageBucket: 'insta-clone-aac9d.appspot.com',
  messagingSenderId: '130901170096',
  appId: '1:130901170096:web:6de0be5d021519d9ab6875',
}

// Initialize Firebase
//getApps - returns array of initialised apps
//getApp - use the already initialised app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
