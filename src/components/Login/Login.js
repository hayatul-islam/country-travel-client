import React from 'react';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle } = useFirebase()
    const handleGoogle = () => {
        signInUsingGoogle()
    }
    return (
        <div>
            <h1>This is login</h1>
            <button onClick={handleGoogle}>google</button>
        </div>
    );
};

export default Login;