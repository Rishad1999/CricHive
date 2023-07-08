import firebase from 'firebase/compat/app';
import 'firebase/compat/database';


const firebaseConfig = {
    apiKey: "AIzaSyAZtALt69xrwBC6Q_SeiDXLTS2rFrBGw80",
    authDomain: "player-b4eca.firebaseapp.com",
    projectId: "player-b4eca",
    storageBucket: "player-b4eca.appspot.com",
    messagingSenderId: "632674762107",
    appId: "1:632674762107:web:7fefac0338099e890491de"
  };

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();