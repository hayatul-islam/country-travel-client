import React from 'react';
import { useHistory } from 'react-router';
import './NotFound.css';

const NotFound = () => {
    const history = useHistory();
    const handleGoHome = () => {
        history.push('/home')
    }
    return (
        <div className="text-center py-5 not-found">
            <h1 className="error-type">404</h1>
            <h1 className="error-text">Page not found!</h1>
            <p className="pt-4 fs-5">Sorry, the page you are looking for could not be found.</p>
            <button className="btn btn-outline-dark px-4 py-2" onClick={handleGoHome}>Go Home</button>
        </div>
    );
};

export default NotFound;