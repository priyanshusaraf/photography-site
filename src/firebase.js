import "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBccEFUUOW1oKhGlF46IFXydXKyycQk8Ww",
  authDomain: "photography-site-1e2ab.firebaseapp.com",
  databaseURL: "https://photography-site-1e2ab.firebaseio.com",
  projectId: "photography-site-1e2ab",
  storageBucket: "photography-site-1e2ab.appspot.com",
  messagingSenderId: "75748498704",
  appId: "1:75748498704:web:0a54373fcdd9ce2d949995",
  measurementId: "G-VB9LRZX11K"
};
const app = firebase.initialiseApp()
const auth = firebase.auth()
const db = firebase.firestore()
export default { auth, db }