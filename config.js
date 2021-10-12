import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyBFhR5zUe2aFY6m-nOEs_uwSOEesKsw14U",
    authDomain: "booksanta-81fed.firebaseapp.com",
    databaseURL:"https://booksanta-81fed.firebaseio.com",
    projectId: "booksanta-81fed",
    storageBucket: "booksanta-81fed.appspot.com",
    messagingSenderId: "738491002936",

    appId: "1:738491002936:web:1b85510c027ec94d4db6cd"
  };

  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig)
  }
  export default firebase.firestore()