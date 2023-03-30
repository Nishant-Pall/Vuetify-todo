// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCu-ylAxHIfyDn_8tCGiM7qY7F-g5-lHTg",
	authDomain: "todo-5a9c8.firebaseapp.com",
	projectId: "todo-5a9c8",
	storageBucket: "todo-5a9c8.appspot.com",
	messagingSenderId: "932918242351",
	appId: "1:932918242351:web:1437fec0f169ceeae22ada",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
