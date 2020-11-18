import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAQJOPgjCtheTdubR7yhKOQro--ai_MSq0",
    authDomain: "discord-cloneee.firebaseapp.com",
    databaseURL: "https://discord-cloneee.firebaseio.com",
    projectId: "discord-cloneee",
    storageBucket: "discord-cloneee.appspot.com",
    messagingSenderId: "669053456900",
    appId: "1:669053456900:web:70b52ba289bd49308e5b51",
    measurementId: "G-1V33W65783"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;