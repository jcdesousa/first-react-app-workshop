import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const app = firebase.initializeApp({
    /* TODO: Put firebase credentails here */
});

const db = firebase.database(app);
const base = Rebase.createClass(db);

export default base;
