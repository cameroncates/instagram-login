import firebase from 'firebase'
import "firebase/auth"
import "firebase/storage"

var config = {
    apiKey: "AIzaSyAsUJmO_osjymfIq9Kgkue-UlJEqLkJkqs",
    authDomain: "instagram-clone-d57b3.firebaseapp.com",
    projectId: "instagram-clone-d57b3",
    storageBucket: "instagram-clone-d57b3.appspot.com",
    messagingSenderId: "782429566135",
    appId: "1:782429566135:web:ed02c35442310aaf12c932",
    measurementId: "G-SVW4T4D3ZD" 

  };

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
export const auth = firebase.auth()
export const db = firebase.database()
export const storage = firebase.storage()
