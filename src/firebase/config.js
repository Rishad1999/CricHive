
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAh6b1hhDvcN-2haqF9KEuBO3k1OFDdy50",
  authDomain: "cricdb-42923.firebaseapp.com",
  projectId: "cricdb-42923",
  storageBucket: "cricdb-42923.appspot.com",
  messagingSenderId: "227778059107",
  appId: "1:227778059107:web:1bda728d736d4a2e599156"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyA7NzmRqDAH9u7yKhDn5TFyz1zEVH_sEtU",
//   authDomain: "writenode-94df1.firebaseapp.com",
//   projectId: "writenode-94df1",
//   storageBucket: "writenode-94df1.appspot.com",
//   messagingSenderId: "619434136789",
//   appId: "1:619434136789:web:a26c26ca9add694c1ebe5c"
// };


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
