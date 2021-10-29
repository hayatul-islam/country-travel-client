import firebaseApp from '../firebase/firebaseApp';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from 'react';


firebaseApp()



const useFirebase = () => {

    const [user, setUser] = useState({});

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {

        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])

    return {
        user,
        signInUsingGoogle,
        logOut
    }

}

export default useFirebase;