import React from 'react';
import { useHistory } from 'react-router';
import './Banner.css';

const Banner = () => {

    const history = useHistory();
    const handleAbout = () => {
        history.push('/about')
    }

    const handleContact = () => {
        history.push('/contact')
    }
    return (
        <div className="banner d-flex justify-content-center align-items-center poppins-font">
            <div className="text-white fw-bold text-uppercase text-center">
                <h1>TIME TO TRAVEL</h1>
                <p>Enjoy Every moments</p>
                <button onClick={handleAbout} className="btn btn-outline-light m-3">About us</button>
                <button onClick={handleContact} className="btn btn-warning">Contact us</button>
            </div>
        </div>
    );
};

export default Banner;