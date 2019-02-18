import Rebase from "re-base";
import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBx6tB_syoLKcH58FzZM2IwVNSO9T_eBmA",
    authDomain: "wedding-list-jc.firebaseapp.com",
    databaseURL: "https://wedding-list-jc.firebaseio.com",
    projectId: "wedding-list-jc",
    storageBucket: "",
    messagingSenderId: "603067745739"
  };
  const firebaseApp = firebase.initializeApp(config);
  
  firebaseApp
    .firestore()
    .enablePersistence()
    .catch(function(err) {
      if (err.code == "failed-precondition") {
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.
        // ...
        alert(
          "Multiple tabs open, persistence can only be enabled in one tab at a time"
        );
      } else if (err.code == "unimplemented") {
        // The current browser does not support all of the
        // features required to enable persistence
        // ...
        alert("The current browser does not support all the feature");
      }
    });

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;