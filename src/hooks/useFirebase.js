import firebaseApp from '../firebase/firebaseApp';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState } from 'react';


firebaseApp()



const useFirebase = () => {

    const [user, setUser] = useState({});

    // console.log(user.email);

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
    }

    const logOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {

        });
    }

    return {
        user,
        signInUsingGoogle,
        logOut
    }

}

export default useFirebase;