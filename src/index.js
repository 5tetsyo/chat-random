import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
const root = ReactDOM.createRoot(document.getElementById('root'));
firebase.initializeApp({
  apiKey: "AIzaSyBR08qqNnRap84ukLuiXb2l74CPhud9yKY",
  authDomain: "chat-b5c62.firebaseapp.com",
  projectId: "chat-b5c62",
  storageBucket: "chat-b5c62.appspot.com",
  messagingSenderId: "887532013174",
  appId: "1:887532013174:web:12eccfc57f36cafb544157",
  measurementId: "G-7Y5SJG6C89"
});
const auth = firebase.auth()
const firestore = firebase.firestore()
export const Context = createContext(null)
root.render(
  <Context.Provider value={{auth, firebase,firestore}}>
    <App />
  </Context.Provider>
);
