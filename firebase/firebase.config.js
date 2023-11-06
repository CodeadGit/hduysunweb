import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"


// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyBvtlImhiBJhdPODz-TNYnhUppE-i1TFHs",
//   authDomain: "hduysun-e47b3.firebaseapp.com",
//   projectId: "hduysun-e47b3",
//   storageBucket: "hduysun-e47b3.appspot.com",
//   messagingSenderId: "967681901797",
//   appId: "1:967681901797:web:664155647793fd1a33400c",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCluWp7DJQ3HpAMJrUerzfd2RYbSBVvePw",
  authDomain: "hduysun-v1.firebaseapp.com",
  projectId: "hduysun-v1",
  storageBucket: "hduysun-v1.appspot.com",
  messagingSenderId: "882470643229",
  appId: "1:882470643229:web:ce837a6bed272eac1a08f4"
};


  const app=initializeApp(firebaseConfig);
  
  export const auth=getAuth(app)

  export const db=getFirestore()

  export const storage=getStorage(app)