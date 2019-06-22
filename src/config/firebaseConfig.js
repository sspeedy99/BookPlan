  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA7m982xOpnnBW496II3Y5vslYkGVFgERc",
    authDomain: "bookplan-8fa94.firebaseapp.com",
    databaseURL: "https://bookplan-8fa94.firebaseio.com",
    projectId: "bookplan-8fa94",
    storageBucket: "",
    messagingSenderId: "822138466022",
    appId: "1:822138466022:web:da8a1664d59aed4a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;