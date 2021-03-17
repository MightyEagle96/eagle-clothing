import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const fireBaseConfig = {
  apiKey: 'AIzaSyAhwmZPdibiRBJ2jXKYoU0mY-CXtRpkmwI',
  authDomain: 'eagle-clothing.firebaseapp.com',
  projectId: 'eagle-clothing',
  storageBucket: 'eagle-clothing.appspot.com',
  messagingSenderId: '916289607984',
  appId: '1:916289607984:web:21b9d33c88201ac7b790f5',
  measurementId: 'G-7K0CDQX928',
};

firebase.initializeApp(fireBaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
