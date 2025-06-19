// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCC32_QU_N7Wr7PW9LZwdYu70gWd3_ULUE',
	authDomain: 'login-register-fullstack.firebaseapp.com',
	projectId: 'login-register-fullstack',
	storageBucket: 'login-register-fullstack.firebasestorage.app',
	messagingSenderId: '479198125864',
	appId: '1:479198125864:web:c98cba27cc0aac9d0eba1d'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
