import React from 'react';
import useAuth from '../../hooks/useAuth'
import { useLocation, useHistory } from 'react-router-dom';

const Login = () => {

    const { signInUsingGoogle } = useAuth();
    const location = useLocation()
    const redirect_url = location.state?.from || '/home';
    const history = useHistory();

    const handleGoogle = () => {
        signInUsingGoogle()
            .then(() => {
                history.push(redirect_url)
            })
    }
    return (
        <div>
            <h1>This is login</h1>
            <button onClick={handleGoogle}>google</button>
        </div>
    );
};

export default Login;