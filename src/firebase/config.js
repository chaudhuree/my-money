import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyClsQ99VbHJHNQGmhjt1FQFKrjjvJeEJio",
  authDomain: "amar-hishab-d4308.firebaseapp.com",
  projectId: "amar-hishab-d4308",
  storageBucket: "amar-hishab-d4308.appspot.com",
  messagingSenderId: "398458990849",
  appId: "1:398458990849:web:ac7041e268156236a4ab00"
};

// init firebase 
firebase.initializeApp(firebaseConfig);

// init service 
const projectFirebase = firebase.firestore();

export { projectFirebase };
