
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCAcgk0DHCQIaJsQHgbK58HyiDae1xJsFA",
    authDomain: "linkedin-clone-yt-26443.firebaseapp.com",
    projectId: "linkedin-clone-yt-26443",
    storageBucket: "linkedin-clone-yt-26443.appspot.com",
    messagingSenderId: "212080996567",
    appId: "1:212080996567:web:3ac824bcef3f195a19c092"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();

  export {db,auth};