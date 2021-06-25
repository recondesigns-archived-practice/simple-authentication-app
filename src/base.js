import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD0P4WmKKG9vWA6SLb7PdAWa7lxL_GdWeI",
    authDomain: "fire-base-practice-542e5.firebaseapp.com",
    projectId: "fire-base-practice-542e5",
    storageBucket: "fire-base-practice-542e5.appspot.com",
    messagingSenderId: "904580328434",
    appId: "1:904580328434:web:743d948aece2019b21996b"
}

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()

export default firebase