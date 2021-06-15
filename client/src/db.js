import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyCsszAx8WirXBYbR5ua9XTLlUjEuEw64Vw",
    authDomain: "roll100.firebaseapp.com",
    projectId: "roll100",
    storageBucket: "roll100.appspot.com",
    messagingSenderId: "775849556162",
    appId: "1:775849556162:web:32f9a4bf6d266b0449635b",
    measurementId: "G-JDL5RKQWXL"
};

export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore();
export const storage = firebase.storage();

const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

db.settings({ timestampsInSnapshots: true });

export default {
  auth: firebase.auth(),
  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      console.log(result);
      
    })
    .catch(function(error){
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      console.log(errorCode, errorMessage, email, credential);
      });
      
  },
  logout() {
    firebase.auth().signOut()
    .then(function() {})
    .catch(function(error) {
      console.log(error)});
      
  },
}
