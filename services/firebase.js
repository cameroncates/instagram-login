import firebase from 'firebase'
import "firebase/auth"
import "firebase/storage"

var config = {
    // apiKey: "AIzaSyAQ9117VVmZZH8uolzNdvO9qoj2B_ADWv8",
    // authDomain: "instagram-clone-ab61a.firebaseapp.com",
    // databaseURL: "https://instagram-clone-ab61a-default-rtdb.asia-southeast1.firebasedatabase.app",
    // projectId: "instagram-clone-ab61a",
    // storageBucket: "instagram-clone-ab61a.appspot.com",
    // messagingSenderId: "702234641860",
    // appId: "1:702234641860:web:bda7f2d3f74e1051a39091",
    // measurementId: "G-GHN9WW6S4W"

    apiKey: "AIzaSyD3SynXDZRvhPsQGnA0p0PvtRa1g7N8jo8",
    authDomain: "instagram-clone-e3110.firebaseapp.com",
    databaseURL: "https://instagram-clone-e3110-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-e3110",
    storageBucket: "instagram-clone-e3110.appspot.com",
    messagingSenderId: "273252762456",
    appId: "1:273252762456:web:7f53060192a3bba7cedb2d",
    measurementId: "G-XX978RJMS4"

  };

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
export const auth = firebase.auth()
export const db = firebase.database()
export const storage = firebase.storage()
