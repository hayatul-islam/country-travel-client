import firebaseApp from '../firebase/firebaseApp';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from 'react';


firebaseApp()



const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState(true);

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const signInUsingGoogle = () => {

        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .then(() => {

            })
            .finally(() => setLoading(false))


    }

    const logOut = () => {
        setLoading(true);
        signOut(auth).then(() => {
            setUser({})
        })
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setLoading(false)
        })
    }, [])

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }

}

export default useFirebase;