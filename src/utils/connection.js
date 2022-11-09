// import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import config from '../../firebase.json';

const app = initializeApp(config);

const Auth = getAuth(app);

export const login = async({ email, password }) => {
    const { user } = await signInWithEmailAndPassword(email, password);
    return user;
};

export {Auth};
