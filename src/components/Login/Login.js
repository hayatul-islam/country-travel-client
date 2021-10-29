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
        <div className="py-5 my-5 d-flex justify-content-center align-items-center">
            <div onClick={handleGoogle} className="btn-group py-5" role="group" aria-label="Basic outlined example">
                <button className="fs-4 btn btn-outline-primary"><i class="fab fa-google"></i></button>
                <button className="btn btn-primary btn-lg"> Sign in with Google</button>

            </div>
        </div>
    );
};

export default Login;