// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;
