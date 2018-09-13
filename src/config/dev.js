export const FirebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_PROJ_ID + '.firebaseapp.com',
  databaseURL: `https://${process.env.REACT_APP_PROJ_ID}.firebaseio.com`
};
