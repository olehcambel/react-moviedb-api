import * as firebase from 'firebase';

import { FirebaseConfig } from './keys';
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const favoritesRef = databaseRef.child('favorites');
