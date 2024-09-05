import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: 'tunnl-react.firebaseapp.com',
  projectId: 'tunnl-react',
  storageBucket: 'tunnl-react.appspot.com',
  messagingSenderId: '356884886337',
  appId: '1:356884886337:web:5c6c6f90f9e35976d927c0',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
