// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth, setPersistence} from "firebase/auth"

/*
//Using .env file.
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};
*/

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlBBvYojT7yRWQyLvacP43wFrhBle3kLo",
    authDomain: "ecommerce-react-63787.firebaseapp.com",
    projectId: "ecommerce-react-63787",
    storageBucket: "ecommerce-react-63787.appspot.com",
    messagingSenderId: "233942492721",
    appId: "1:233942492721:web:abfc79e1af774ce2c25710"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

setPersistence(auth, browserLocalPersistence)
    .then(()=> {
        console.log(("Auth persistence set to LocalStorage"))
    })
    .catch((err) => {
        console.log(err.message)
    })
