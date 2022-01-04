import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDsOMgi4j1Duom8WKJSttbX4yPK_9C3LtY",
    authDomain: "netflix-clone-eed53.firebaseapp.com",
    projectId: "netflix-clone-eed53",
    storageBucket: "netflix-clone-eed53.appspot.com",
    messagingSenderId: "1046365558361",
    appId: "1:1046365558361:web:8ba9c637d9a2f6e6a18348"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
export default db;
